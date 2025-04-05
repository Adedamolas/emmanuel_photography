"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Emmanuel captured our wedding day perfectly. His attention to detail and ability to catch candid moments gave us memories we'll cherish forever. The photos exceeded our expectations!",
  },
  {
    id: 2,
    name: "Michael Thompson",
    text: "Working with Emmanuel was effortless. He made our family feel comfortable in front of the camera, and the results were stunning. He has an incredible eye for composition and lighting.",
  },
  {
    id: 3,
    name: "Elizabeth Chen",
    text: "I hired Emmanuel for my business headshots and product photography. His professionalism and creative approach transformed our brand image. I couldn't be happier with the results.",
  },
  {
    id: 4,
    name: "David Okonkwo",
    text: "Emmanuel's talent for capturing emotions is unmatched. Our graduation photos tell a story that words can't express. His work is worth every penny and more.",
  },
];

// Changed from export function to const
const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          What My Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
              <p className="font-bold uppercase">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  return <TestimonialsSection />;
}
