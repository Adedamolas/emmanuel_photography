import { BookmarkPlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const footerLinks = [];
  return (
    <footer className=" flex flex-col text-left space-y-3">
      <h2>Reading list</h2>
      <p>
        Click the <BookmarkPlusIcon /> on any story to easily add to your
        reading list or a custom list that you can share.
      </p>
      <ul className=" flex flex-row gap-3">
        <Link href={"/help"}>
          <li>Help</li>
        </Link>
        <Link href={"/help"}>
          <li>Status</li>
        </Link>{" "}
        <Link href={"/help"}>
          <li>About</li>
        </Link>{" "}
        <Link href={"/help"}>
          <li>Careers</li>
        </Link>{" "}
        <Link href={"/help"}>
          <li>Blog</li>
        </Link>{" "}
        <Link href={"/help"}>
          <li>Privacy</li>
        </Link>{" "}
        <Link href={"/help"}>
          <li>Text to Speech</li>
        </Link>{" "}
        <Link href={"/help"}>
          <li>Teams</li>
        </Link>{" "}
      </ul>
    </footer>
  );
}
