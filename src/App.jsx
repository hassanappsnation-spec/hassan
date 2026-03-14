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

const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
     </Routes>
    </div>
  )
}

export default App