import { NextRequest, NextResponse } from "next/server";
/** Same-origin bridge to the existing Spring AuthController. Tokens stay in HttpOnly cookies. */
export async function POST(request:NextRequest,{params}:{params:Promise<{action:string}>}){
 const {action}=await params;
 if(!["login","register","logout"].includes(action))return NextResponse.json({message:"Not found"},{status:404});
 const origin=request.headers.get("origin");
 if(origin && origin!==request.nextUrl.origin)return NextResponse.json({message:"Request origin not allowed"},{status:403});
 if(action==="logout"){const response=NextResponse.json({ok:true});response.cookies.delete("skillbridge_access");response.cookies.delete("skillbridge_refresh");return response;}
 let body:Record<string,unknown>;
 try{body=await request.json();}catch{return NextResponse.json({message:"Invalid request"},{status:400});}
 if(!body || typeof body.email!=="string" || typeof body.password!=="string" || body.password.length>128 || body.email.length>254)return NextResponse.json({message:"Please enter your email and password."},{status:400});
 if(action==="register"&&(typeof body.firstName!=="string"||typeof body.lastName!=="string"||!body.firstName.trim()||!body.lastName.trim()||body.firstName.length>100||body.lastName.length>100||body.password.length<8))return NextResponse.json({message:"Enter your name and a password of at least 8 characters."},{status:400});
 const base=process.env.API_BASE_URL||process.env.NEXT_PUBLIC_API_URL||"http://localhost:8080/api";
 try{
  const upstream=await fetch(`${base.replace(/\/$/,"")}/auth/${action}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),signal:AbortSignal.timeout(10000),cache:"no-store"});
  if(!upstream.ok)return NextResponse.json({message:upstream.status===409?"An account with this email already exists.":upstream.status===401||upstream.status===403?"Your email or password is incorrect.":"We couldn’t complete sign in. Please check your details and try again."},{status:upstream.status});
  const data=await upstream.json();
  if(typeof data.accessToken!=="string"||typeof data.refreshToken!=="string")throw new Error("Invalid auth response");
  const response=NextResponse.json({user:data.user});
  const cookieOptions={httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax" as const,path:"/"};
  response.cookies.set("skillbridge_access",data.accessToken,{...cookieOptions,maxAge:Math.max(1,Math.min(Number(data.expiresIn)||3600,86400))});
  response.cookies.set("skillbridge_refresh",data.refreshToken,{...cookieOptions,maxAge:7*86400});
  return response;
 }catch{return NextResponse.json({message:"Sign in is temporarily unavailable. Please try again later."},{status:503});}
}
