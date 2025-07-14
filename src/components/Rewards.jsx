import React from "react";
import reward1 from "../image/reward1.jpg";
import reward2 from "../image/reward2.jpg";
import reward3 from "../image/reward3.jpg";

export default function Rewards() {
  const rewards = [
    { image: reward1, points: 300, label: "GIFT CARD"},
    { image: reward2, points: 200, label: "DISCOUNT COUPON"},
    { image: reward3, points: 50, label: "COMMUNITY HERO"},
  ];

  return (
    <section id="rewards" className="w-full py-16 bg-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/*title*/}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10"> 🎉 Rewards </h2>

        {/* rewards card*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center">
              <img src={reward.image} alt={reward.label}
              className="w-40 h-40 object-contain rounded-xl mb-4"
              />
              <p className="text-green-700 font-bold mb-2">{reward.points} pts</p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800 transition">
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
