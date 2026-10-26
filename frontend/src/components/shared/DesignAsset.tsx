import type { CSSProperties } from "react";
/** Figma SVGs retain their intrinsic geometry inside responsive design slots. */
export function DesignAsset({ src, alt = "", className = "", style }: { src: string; alt?: string; className?: string; style?: CSSProperties }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`design-asset ${className}`} style={style} loading="lazy" />;
}
