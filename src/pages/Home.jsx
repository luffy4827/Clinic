import React from 'react'
import Hero from '../sections/Hero'
import Camp from '../sections/Camp'
// import Gallery from '../sections/Gallery'
import Book from '../sections/Book'
import Banner from '../sections/Banner'
import Saying from '../sections/Saying'
import Services from '../sections/Services'

const Home = () => {
  return (
    <div>
      <Hero />
      <Saying />
      {/* <Gallery /> */}
      <Book />
      <Banner />
      <Services />
      <Camp />
    </div>
  )
}

export default Home
