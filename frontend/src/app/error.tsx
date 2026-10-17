"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <div className="page-container"><div className="glass-panel empty-state" role="alert"><h1>We couldn’t load this page.</h1><p>Please try again in a moment.</p><button className="glass-button" onClick={reset}>Try again</button></div></div>;}
