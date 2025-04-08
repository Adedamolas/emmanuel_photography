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
            Hello, I&apos;m Emmanuel Adewuyi, a passionate photographer based in
            Lagos. For over 5 years, I&apos;ve been capturing moments that tell
            stories through the lens of my camera.
          </p>
          <p className="text-gray-700 mb-4">
            My journey into photography began after my secondary school
            education, and I was really committed to mastering the craft. Since
            then, the journey continued , from exploring street photography to
            documentary, to shooting portraits, to documenting events. what
            started as a skill has grown to become a business, not just that but
            a great tool which has made me connect more with people and also put
            smile on many faces through the images I create for them.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years my unique style of photography as set me apart and as
            made my work stand out. I&apos;m a big fan of the renaissance, and I
            ensure that every image I create is timeless and it&apos;s one that
            last.
          </p>
          <p className="text-gray-700">
            Asides photography, I&apos;m a graduate of Biochemistry interested
            in data science and AI. I&apos;m also a lover of classical church
            music. I read music sheet, play the piano and also the trumpet.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">My Approach</h2>
        <p className="text-gray-700 mb-6 max-w-3xl">
          My Approach to photography is a very unique one, I do not believe
          photography is just about clicking the shutter of the camera, or the
          light set up, or twerking few slides in Photoshop. Although it&apos;s
          part of the craft Beyond the technical part, I find my craft as a
          means of bringing out the beauty, the confidence and worth in people.
          Each session is an opportunity to create a masterpiece that
          communicates and speak volume.
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

      {/* <div>
        <h2 className="text-3xl font-semibold mb-6">Equipment</h2>
        <p className="text-gray-700 mb-6">
          While a photographer&apos;s eye and creativity are paramount, quality
          equipment helps bring my vision to life. Here&apos;s what I typically
          work with:
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
      </div> */}
    </div>
  );
}
