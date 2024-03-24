import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import Signin from './components/Signin'
import HomePage from './components/HomePage'
import Superadmin from './components/Superadmin'
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
import CreateEventForm from './components/EventForm'



// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import VerifyPS from './components/VerifyPS'
import EventsAction from './components/EventsAction'
import DataVisulization from './components/DataVisulization'
import GeneralAds from './components/GeneralAds'
import UpcomingNgoEvents from './components/UpcommingEventsNgo'
import Register from './components/Registeration'
import DataScience from './components/DataScience'



function App() {

  return (
    <>
      {/* <Navigation/>
      <Statistics/>
      <Card/> */}
      <Router>
      <Navigation/>
        <Routes >
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/govrn' element={<>Hello Government</>}/>
          <Route exact path='/addevents' element={<CreateEventForm/>}/>
          <Route exact path='/addactions' element={<EventsAction/>}/>
          <Route exact path='/data' element={<DataVisulization/>}/>
          <Route exact path='/generalAds' element={<GeneralAds/>}/>
          <Route exact path='/govevents' element={<UpcomingEvents/>}/>
          <Route exact path='/upcommingngoevents' element={<UpcomingNgoEvents/>}/>
          <Route exact path='/registeration' element={<Register/>}/>
          <Route exact path='/dashboardNGO' element={<DataScience/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
