import React from "react";
export default function Rules() {
  const rules = [
    {
      icon: "🥷",
      title: "Peak Ninja",
      points: "2pts",
      desc: "Reduce electricity usage during peak hours (more than 10%)",
      color: "bg-green-100",
    },
    {
      icon: "🥈",
      title: "Mission Achiever",
      points: "2pts",
      desc: 'Complete platform-assigned energy-saving task (e.g., "Lights Off Challenge")',
      color: "bg-blue-100",
    },
    {
      icon: "📖",
      title: "Power Learner",
      points: "2pts",
      desc: "Attend a workshop or community energy event (Verified attendance)",
      color: "bg-orange-100",
    },
    {
      icon: "🔋",
      title: "Grid Giver",
      points: "3pts",
      desc: "Export excess solar/battery energy to the community (more than 1kWh)",
      color: "bg-yellow-100",
    },
    {
      icon: "🔁",
      title: "Energy Influencer",
      points: "5pts",
      desc: "Invite a new household and they complete their first task (Via referral code tracking)",
      color: "bg-red-100",
    },
    {
      icon: "🤝",
      title: "Co-op Champion",
      points: "5pts",
      desc: "Join and complete a group/community challenge (e.g., block-level missions)",
      color: "bg-sky-100",
    }
  ];

  return (
    <section id="rules" className="w-full py-16 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/*title*/}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">📜 Rules</h2>

        {/* rules card*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          {rules.map((rule, index) => (
            <div key={index} className={`rounded-xl p-4 shadow-sm ${rule.color}`}>
              <h3 className="font-bold text-lg text-gray-800 mb-1">{rule.icon} {rule.title} {rule.points}</h3>
              <p className="text-sm text-gray-700">{rule.desc}</p>
            </div>
          ))}
        </div>

        {/* point notes area */}
        <div className="bg-green-100 rounded-xl p-4 text-left max-w-3xl mx-auto">
          <h4 className="text-green-700 font-bold mb-2">✅ Point notes:</h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>2 pt tasks focus on individual energy-saving behavior</li>
            <li>3 pt tasks encourage sharing energy</li>
            <li>5 pt tasks are focused on community cooperation and dissemination</li>
          </ul>
        </div>
      </div>
    </section>  
  );
}
