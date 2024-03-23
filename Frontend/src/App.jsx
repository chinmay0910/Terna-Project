import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigation'
import Statistics from './components/Statistics'
import Card from './components/Card'
import NavigationNgo from './components/NavigationNgo'
import StatisticsNgo from './components/StatisticsNgo'
import CardNgo from './components/CardNgo'
import AllEventsData from './components/EventData'
import UpcomingEvents from './components/UpcommingEvents'
import AboutPage from './components/AboutPage'
import Dashboard from './components/Company'
import NavigationCompany from './components/NavigationCompany'
import StatisticsCompany from './components/StatisticCompany'
import AboutCompany from './components/AboutCompany'
import Footer from './components/Footer'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationNgo/>
       <StatisticsNgo/>
      <CardNgo/>
      <Footer/>
      {/* <NavigationCompany/>
       <StatisticsCompany/>
      <CardNgo/> */}
      {/* <AboutPage/> */}
      {/* <AllEventsData/> */}
      {/* <UpcomingEvents/> */}
      {/* <Dashboard/> */}
    </>
  )
}

export default App
