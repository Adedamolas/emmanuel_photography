"use client";

import CollectionsPage from "./collection/page";
import Header from "./Header";
import { TestimonialsSection } from "./testimonials/page";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-col px-4 gap-10 items-center justify-between max-w-7xl mx-auto">
      <div>
        <Header />
      </div>

      <div>
        <CollectionsPage />
      </div>
      <div>
        <TestimonialsSection />
      </div>
    </main>
  );
}
