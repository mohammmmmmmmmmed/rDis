import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./page/home/Home"
import './App.css'
//import Login from "./page/login/Login"
function App() {
  

  return (
 <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/login" element={<Login/>}/> */}
  </Routes>
 </Router>   
  )
}

export default App
