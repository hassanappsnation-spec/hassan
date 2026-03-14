import React from 'react'
import HeroSlider from '../components/HeroSlider'
import CatagoryThembnails from '../components/CatagoryThembnails'

const Home = () => {
  return (
    <div className='mt-22'>
      <HeroSlider/>
      <CatagoryThembnails/>
    </div>
  )
}

export default Home