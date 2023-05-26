import React from 'react'
import CollapsibleExample from '../header/nevBar/NevBar'
import Footer from '../footer/Footer'
import Body from '../body/Body'
import Contact from '../body/Contact'
import Project from '../body/Project'
import About from '../body/Skills'
import {
  Route,
  Routes,
} from "react-router-dom";
const Root = () => {
  return (
    <div><CollapsibleExample/>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Project" element = {<Project/>}/>
      <Route path="/About" element= {<About/>}/>


      
    </Routes>
    
    <Footer/></div>
  )
}

export default Root