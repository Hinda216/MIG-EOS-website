import React from "react";
import activity1 from "../image/activity1.jpg";
import activity2 from "../image/activity2.jpg";
import activity3 from "../image/activity3.jpg";

export default function Activity() {
  const activities = [activity1, activity2, activity3];

  return (
    <section id="activity" className="w-full py-16 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/*title*/}
        <div className="flex items-center gap-2 text-green-700 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Current Activities</h2>
        </div>

        {/* activity card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((img, index) => (
            <div key={index}
              className="rounded-2xl overflow-hidden shadow-md">
              <img src={img} alt={`activity-${index}`}
              className="w-full h-auto object-cover" />
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
}
