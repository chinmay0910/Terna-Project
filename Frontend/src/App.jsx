import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import Signin from './components/Signin'
import HomePage from './components/HomePage'
import Superadmin from './components/Superadmin'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import VerifyPS from './components/VerifyPS'

function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/ngo' element={<>hello i am ngo</>}/>
          {/* <Route exact path='/sa' element={<Superadmin/>}/>
          <Route exact path='/ps' element={<VerifyPS/>}/> */}
          <Route exact path='/govrn' element={<>Hello Government</>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
