import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import ProductDetail from './components/ProductDetail'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
     </Routes>
      <Footer/>

    </div>
  )
}

export default App