import React from 'react'
import Hero from '../hero/Hero'
const Home = ({movies}) => {
  console.log("Movies :",movies)
  return (
    <Hero movies={movies}/>
  )
}

export default Home
