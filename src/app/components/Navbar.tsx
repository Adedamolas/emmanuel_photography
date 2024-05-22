"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { Bell, Book, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  useEffect(() => {
    setTimeout;
  });
  return (
    <>
      <nav className=" w-full fixed top-0 flex flex-row justify-between p-3">
        <div className=" flex flex-row items-center gap-5">
          <Image width={50} height={50} src="/logo.png" alt="logo" />
          <span className=" flex flex-row items-center gap-1 text-gray-600">
            <Search />
            <input className=" p-2" type="text" placeholder="Search" />
          </span>
        </div>
        <div className=" flex flex-row items-center justify-center gap-6 text-gray-600">
          <span className=" flex flex-row items-center">
            <Book />
            Write
          </span>
          <span>
            <Bell />
          </span>
          <p>PI</p>
          {/* <Image /> */}
        </div>
      </nav>
      {isInfoVisible ? (
        <div>
          <div className=" flex flex-row w-full justify-center">
            <h2 className=" font-semibold">
              Get unlimited access to the best of Medium for less then $1/week.{" "}
              <a href="">Become a member.</a>
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
