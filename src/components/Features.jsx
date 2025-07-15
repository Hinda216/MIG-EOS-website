import React from "react";
import feature from '../image/feature.JPG';
export default function Features() {
  return (
    <section id="feature" className="w-full py-16 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">🧩 Features</h2>
        <div>
          <img 
            src={feature} 
            alt="Feature" 
            className="w-full rounded-lg shadow-md"
          />
        </div>       
      </div>
    </section>
  );
}
