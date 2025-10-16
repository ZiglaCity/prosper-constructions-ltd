"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="workers.mp4" type="video/mp4" />
        {/* Optional fallback text for accessibility */}
        Your browser does not support the video tag.
      </video>

      {/*  Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Building Excellence in Ghana
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
          Your trusted partner for residential, commercial, and infrastructure
          construction projects across Ghana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Get Free Quote
          </Link>

          <Link
            href="/projects"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/*  Fallback gradient for when video fails */}
      <style jsx>{`
        video:not([src]) + div {
          background: linear-gradient(to right, #ea580c, #dc2626);
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 peer-[video:not([src])~&]:opacity-100 transition-opacity" />
    </section>
  );
}
