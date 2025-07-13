import React from "react";
import bgimage from "../image/homeBG.jpg";

export default function Home() {
  return (
    <section id="home" className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center pt-20 -mt-20 scroll-mt-20" 
    style={{backgroundImage:`url(${bgimage})`,}}>
      <div className="max-w-6xl w-full mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-start">
        {/*left content*/}
        <div className="max-w-xl">
            <h1>WATTS PLAY</h1>

            <ul className="space-y-2 text-lg font-medium mb-6 text-green-700">
                <li>🎮 Play Games</li>
                <li>⚡ Save Energy</li>
                <li>🎁 Get Rewards</li>
                <li>🏠 Together for a Greener Community</li>
            </ul>

            <div className="flex gap-4">
                <button className="bg-white text-green-700 px-5 py-2 rounded shadow hover:bg-gray-100">
                    Sign in
                </button>
                <button className="bg-[#60A478] text-white px-5 py-2 rounded shadow hover:bg-green-800">
                    Register
                </button>
            </div>
        </div>
      </div>
    </section> 
  );
}
