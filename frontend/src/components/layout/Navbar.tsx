import { hasSessionCookie } from "@/lib/auth/session";
import NavbarClient from "./NavbarClient";

/** Resolves session state on the server so the first paint already shows the right account control. */
export default async function Navbar() {
  return <NavbarClient signedIn={await hasSessionCookie()} />;
}
