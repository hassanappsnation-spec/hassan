import React from 'react'
import HeroSlider from '../components/HeroSlider'
import CatagoryThembnails from '../components/CatagoryThembnails'
import ProductsCards from '../components/ProductsCards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mt-22'>
      <HeroSlider/>
      <CatagoryThembnails/>
      <ProductsCards/>
    </div>
  )
}

export default Home