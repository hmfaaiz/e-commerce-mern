import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Categories from "../components/Categories"

function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home
