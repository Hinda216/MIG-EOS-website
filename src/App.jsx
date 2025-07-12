import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Details from './components/Details'
import Leaderboard from './components/Leaderboard'
import Rewards from './components/Rewards'
import Activity from './components/Activity'
import Rules from './components/Rules'
import AboutUS from './components/AboutUs'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Details/>
      <Leaderboard/>
      <Activity/>
      <Rewards/>
      <Rules/>
      <AboutUS/>
      <Footer/>
    </>
  )
}

export default App
