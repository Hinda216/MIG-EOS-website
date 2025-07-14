import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Features from './components/Features'
import Leaderboard from './components/Leaderboard'
import Rewards from './components/Rewards'
import Activity from './components/Activity'
import Rules from './components/Rules'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className="pt-20">
        <Home/>
        <Features/>
        <Leaderboard/>
        <Activity/>
        <Rewards/>
        <Rules/>
        <AboutUs/>
      </div>
      <Footer/>
    </>
  )
}

export default App
