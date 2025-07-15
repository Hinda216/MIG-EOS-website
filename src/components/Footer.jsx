import React from "react";
import Facebook from "../image/facebook.png";
import Linkedin from "../image/linkedin.jpg";
import Instagram from "../image/ins.png";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* contact info */}
        <div>
          <h4 className="font-semibold text-lg mb-2">📮 Contact Us</h4>
          <p>123 Solar Street</p>
          <p>Melbourne, VIC 3000</p>
          <p>Phone: +61 123 456 789</p>
          <p>Email: contact@wattsplay.com</p>
        </div>

        {/* social media */}
        <div>
          <h4 className="font-semibold text-lg mb-2">🔗 Social Media</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook"><img src={Facebook} alt="Facebook" className="h-6 w-6" /></a>
            <a href="#" aria-label="LinkedIn"><img src={Linkedin} alt="LinkedIn" className="h-6 w-6" /></a>
            <a href="#" aria-label="Instagram"><img src={Instagram} alt="Instagram" className="h-6 w-6" /></a>
          </div>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right self-center">
          © 2025 WATTS Play. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
