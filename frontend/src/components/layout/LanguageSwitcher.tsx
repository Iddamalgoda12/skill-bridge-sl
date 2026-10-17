"use client";
import { useState } from "react";
import { Globe } from "lucide-react";
export default function LanguageSwitcher() {
  const [notice, setNotice] = useState(false);
  return <div className="language-wrapper"><div className="language-switcher" aria-label="Language"><Globe size={17} /><button type="button" className="selected" aria-pressed="true" onClick={() => setNotice(false)}>ENG</button><button type="button" lang="si" aria-pressed="false" onClick={() => setNotice(!notice)}>සිංහල</button></div>{notice && <div className="language-notice glass-panel" role="status">සිංහල පරිවර්තනය ළඟදීම.<br />Sinhala translations are coming soon.</div>}</div>;
}
