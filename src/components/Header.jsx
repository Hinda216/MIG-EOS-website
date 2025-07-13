export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-green-700">
                    WATTS PLAY
                </div>
                <nav className="flex space-x-4">
                    <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
                    <a href="#details" className="text-gray-700 hover:text-green-600">Details</a>
                    <a href="#leaderboard" className="text-gray-700 hover:text-green-600">Leaderboard</a>
                    <a href="#activity" className="text-gray-700 hover:text-green-600">Activity</a>
                    <a href="#rewards" className="text-gray-700 hover:text-green-600">Rewards</a>
                    <a href="#rules" className="text-gray-700 hover:text-green-600">Rules</a>
                    <a href="#aboutUs" className="text-gray-700 hover:text-green-600">About Us</a>
                </nav>
            </div>
        </header>
    )
}