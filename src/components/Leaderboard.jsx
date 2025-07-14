import React, { useState } from "react";
import A from "../image/1st.jpg";
import B from "../image/2nd.jpg";
import C from "../image/3rd.jpg";
import D from "../image/4th.png";
import E from "../image/5th.png";
import F from "../image/mon5th.png";

export default function Leaderboard() {
  const [tab, setTab] =useState("weekly");

  const data = {
    weekly: [
      {name: "Lily", rank: "1st", icon: "🏆", img: A, location: "Glen VIC", save: 530},
      {name: "Bob", rank: "2nd", icon: "🥈", img: B, location: "Box Hill VIC", save: 480},
      {name: "David", rank: "3rd", icon: "🥉", img: C, location: "Clayton VIC", save: 450},
      {name: "Kelvin", rank: "4th", icon: "🏅", img: D, location: "Richmond VIC", save: 410},
      {name: "Angela", rank: "5th", icon: "🎗️", img: E, location: "Carlton VIC", save: 395},
    ],
    monthly: [
      {name: "David", rank: "1st", icon: "🏆", img: C, location: "Clayton VIC", save: 2000},
      {name: "Lily", rank: "2nd", icon: "🥈", img: A, location: "Glen VIC", save: 1900},
      {name: "Kelvin", rank: "3rd", icon: "🥉", img: D, location: "Richmond VIC", save: 1855},
      {name: "Angela", rank: "4th", icon: "🏅", img: E, location: "Carlton VIC", save: 1700},
      {name: "Kelly", rank: "5th", icon: "🎗️", img: F, location: "South Yarra VIC", save: 1550},
    ], 
  };

  return (
    <section id="leaderboard" className="px-6 py-12 bg-gray-100 scroll-mt-20">
      {/* title and change button*/}
      <div className="text-center gap-4 mb-6">
        <h2 className="text-3xl font-bold text-green-700 mb-2">🌟 Leaderboard</h2>
        <div className="flex justify-center gap-4">
          <button className={`px-4 py-1 rounded-full text-sm font-medium ${
              tab === "weekly"
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`} onClick={() => setTab("weekly")}
          >
            Weekly
          </button>
          <button
          className={`px-4 py-1 rounded-full text-sm font-medium ${
              tab === "monthly"
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`} onClick={() => setTab("monthly")}
          >
            Monthly
          </button>
        </div>
        <div className="text-left max-w-3xl mx-auto mb-8 space-y-3 text-gray-700">
            <p className="font-bold text-green-700">
              🎉 Congratulations to Our Energy Champions!
            </p> 
            <p>
              A huge shoutout to this week/month's top energy savers - the people turning small, smart actions into real impact for their homes, their communities, and the planet.
            </p>
            <p>
              Thanks to their efforts, they've not only saved energy but earned their spot at the top of our leaderboard!
            </p>
        </div>
        
      </div>

      {/* display card*/}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
        {data[tab].map((user, index) => (
          <div key={index}
          className={`flex flex-col items-center bg-white rounded-2xl p-4 ${
              user.rank === "1st"
                ? "border-4 border-yellow-400"
                : "shadow"
            }`}>
              <img src={user.img}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover mb-2" />
              <p className="text-sm font-bold text-green-700">
                {user.icon} {user.name}
              </p>
              <p className="text-sm text-gray-600">
                {user.rank}
              </p>
          </div>
        ))}
      </div>

      {/* user detials saving*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {data[tab].map((user, index) => (
          <div key={index} className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
            <div className="flex items-center gap-4">
              <img src={user.img} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-green-700">
                  {user.icon} {user.name}
                </p>
                <p className="text-sm text-gray-500">{user.location}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 font-bold">SAVE</p>
              <p className="text-xl text-green-700 font-bold">{user.save} kWh</p>
            </div>
          </div>
        ))}
      </div>  
    </section>
  );
}
