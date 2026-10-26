"use client";

/**
 * Last-resort boundary for errors in the root layout itself, where the
 * translation provider is unavailable, so the copy is deliberately bilingual.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", textAlign: "center", background: "#fff4cb", color: "#1c281d" }}>
        <h1>Something went wrong · යම් දෝෂයක් සිදු විය</h1>
        <p>Please try again. · කරුණාකර නැවත උත්සාහ කරන්න.</p>
        <button onClick={reset} style={{ padding: "0.75rem 1.5rem", borderRadius: "1rem", border: "1px solid #193b2b", background: "#193b2b", color: "#fff" }}>
          Retry · නැවත
        </button>
      </body>
    </html>
  );
}
