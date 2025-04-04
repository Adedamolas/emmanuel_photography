"use client";

import React from "react";
import { approach } from "../../../data/about";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div
            className="w-full h-[60vh] bg-gray-300 cursor-pointer bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dsudloo9k/image/upload/v1743716613/DSC_0243art3_gdksr7.jpg')",
            }}
          ></div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">My Story</h2>
          <p className="text-gray-700 mb-4">
            Hello, I'm Emmanuel Adewuyi, a passionate photographer based in
            Lagos. For over 5 years, I've been capturing moments that tell
            stories through the lens of my camera.
          </p>
          <p className="text-gray-700 mb-4">
            My journey into photography began when [short story about how you
            started]. Since then, I've developed my style focusing on [your
            photography style/specialty], seeking to [your mission/purpose].
          </p>
          <p className="text-gray-700">
            When I'm not behind the camera, you'll find me reading and playing
            the keyboard. I believe that these experiences enrich my perspective
            and influence my photographic work.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">My Approach</h2>
        <p className="text-gray-700 mb-6 max-w-3xl">
          I believe that photography is about [your philosophy about
          photography]. Each session is an opportunity to [what you aim to
          achieve in your work].
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approach.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <item.icon className="h-6 w-6 mb-2" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6">Equipment</h2>
        <p className="text-gray-700 mb-6">
          While a photographer's eye and creativity are paramount, quality
          equipment helps bring my vision to life. Here's what I typically work
          with:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Cameras</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Canon EOS R5</li>
              <li>Sony Alpha a7 III</li>
              <li>Fujifilm X-T4</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Lenses</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>24-70mm f/2.8</li>
              <li>70-200mm f/2.8</li>
              <li>35mm f/1.4 Prime</li>
              <li>85mm f/1.4 Prime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
