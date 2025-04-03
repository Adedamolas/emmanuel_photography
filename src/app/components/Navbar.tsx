"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { Bell, Book, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  useEffect(() => {
    setTimeout;
  });
  return (
    <header className="p-4 shadow-sm bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Photographer Name</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
