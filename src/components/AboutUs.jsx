import React from "react";
import aboutUS from "../image/aboutUS.jpg";

export default function AboutUs() {
  return (
    <section id="aboutUs" className="w-full py-16 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">🧑‍💼 About Us</h2>
        <div className="mt-6" />
        <div>
          <img src={aboutUS} alt="aboutUs" 
          className="w-full rounded-lg shadow-md"/>
        </div>
      </div>
    </section>
  );
}
