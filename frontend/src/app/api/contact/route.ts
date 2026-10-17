import { NextRequest, NextResponse } from "next/server";
export async function POST(request:NextRequest){
 const origin=request.headers.get("origin");if(origin&&origin!==request.nextUrl.origin)return NextResponse.json({message:"Request origin not allowed"},{status:403});
 // Placeholder contract: enable only after POST /contact exists in Spring.
 if(process.env.CONTACT_API_ENABLED!=="true")return NextResponse.json({message:"Messages are not available yet. Please try again later; your message has not been sent."},{status:503});
 try{const body=await request.json();if(typeof body.name!=="string"||typeof body.email!=="string"||typeof body.message!=="string"||body.message.length<10||body.message.length>4000)return NextResponse.json({message:"Please complete all fields."},{status:400});
 const base=process.env.API_BASE_URL||"http://localhost:8080/api";const response=await fetch(`${base.replace(/\/$/,"")}/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),signal:AbortSignal.timeout(8000)});
 if(!response.ok)throw new Error("Contact service unavailable");return NextResponse.json({ok:true});
 }catch{return NextResponse.json({message:"Your message could not be sent. Please try again later."},{status:503});}
}
