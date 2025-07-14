import { useState } from "react";

export default function Header() {
    const [active, setActive] = useState("home");

    const navItems = [
        {id: "home", label:"Home"},
        {id: "feature", label:"Features"},
        {id: "leaderboard", label:"Leaderboard"},
        {id: "activity", label:"Activity"},
        {id: "rewards", label:"Rewards"},
        {id: "rules", label:"Rules"},
        {id: "aboutUs", label:"AboutUs"},
    ];
    return (
        <header className="fixed top-0 w-full bg-[#60A478] shadow-md z-50 text-white">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* EOS LOGO*/}
                <div className="flex items-center gap-2">
                    <img
                        src="../image/eoslogo.jpg"
                        alt="EOS Logo"
                        className="h-12 w-12 object-contain"
                    />
                </div>

                {/*nav part*/}
                <nav className="flex gap-6 text-sm font-medium">
                    {navItems.map((item) =>(
                        <a key={item.id} href={`#${item.id}`}
                        onClick={() => setActive(item.id)}
                        className={`px-4 py-1.5 rounded-full border transition
                            ${
                            active === item.id
                                ? "bg-white text-[#60A478] border-white"
                                : "bg-[#60A478] text-white border-[#60A478] hover:bg-white hover:text-[#60A478]"
                            }`}
                        >
                          {item.label}  
                        </a>
                    ))}
                </nav>

                {/* right: button chat with us*/}
                <div>
                    <button className="bg-white text-[#60A478] px-4 py-2 text-sm rounded-full hover:bg-gray-100 transition">
                        Chat with us
                    </button>
                </div>
            </div>
        </header>
    )
}