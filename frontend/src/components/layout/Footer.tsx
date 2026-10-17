export default function Footer({ note = "Your future. Your path." }: { note?: string }) {
  return <footer className="site-footer"><span><strong>SKILLBRIDGE SL</strong> <span className="footer-tagline">• {note}</span></span><span>An independent student-made guidance platform • Sri Lanka</span></footer>;
}
