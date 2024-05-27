import React from 'react'

import Hero from '../../components/Hero/Hero'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <div>
    <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Blog/>
      </div>
      <div></div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
