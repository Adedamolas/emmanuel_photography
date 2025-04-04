import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Emmanuel Adewuyi. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Instagram
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Facebook
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
