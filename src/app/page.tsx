"use client";

import { photos } from "../../data/photos";
import Gallery from "./components/gallery/Gallery";

export default function Home() {
  return (
    <main className="flex flex-row px-20 gap-10 items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Photography Portfolio</h1>
        <p className="text-gray-600">Capturing moments that last forever</p>
      </div>

      <Gallery photos={photos} />
    </main>
  );
}
