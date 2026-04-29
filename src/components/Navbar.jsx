import React, { useEffect, useState } from 'react'
import {  FaRegHeart, FaCreditCard, FaHamburger,FaTimes  } from "react-icons/fa";
import { HiOutlineUser,HiOutlineMenu  } from "react-icons/hi";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(true); // navbar visible
    const [lastScrollY, setLastScrollY] = useState(0); // last scroll position

  const cartItems = useSelector((state) => state.cart.cartItem);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShow(false);
            } else {
                // scrolling up
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    // mobile menu navbar responsive
    const [isMobileMenuShow,setIsMobileMenuShow] = useState(false)
    const handleMobileMenu =()=>{
        if(!isMobileMenuShow){

            setIsMobileMenuShow(true)
        }else{
            setIsMobileMenuShow(false)
        }
        
    } 
    return (
      <>
        <div className={`hidden md:flex justify-between items-center py-8 px-15 fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow ${show ? "translate-y-0" : "-translate-y-20"
            }`}>
            <div className="font-semibold  text-3xl underline "><Link to='/'>BuyNest</Link></div>

            <div >
                <ul className="flex gap-5">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/contact'>Conatact us</Link></li>
                </ul>
            </div>
            <div className="mt-2">
                <ul className="flex gap-5"  >
                    <li> <Link to='/profile'><HiOutlineUser size={24} /></Link></li>
                    <li className='relative'>

                        <Link className='z-20' to='/cart'><MdAddShoppingCart size={24} /></Link>
                        <p className='z-10 bg-red-500 text-white text-center rounded-2xl relative bottom-9 left-4'>{cartItems.length}</p>
                    </li>
                </ul>
            </div>
        </div>

          <div className={`flex md:hidden justify-between py-8 px-15 fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow ${show ? "translate-y-0" : "-translate-y-20"
            }`}>
            <Link to='/'><div className="font-semibold  text-3xl underline ">BuyNest</div></Link>
          
            <div className="">
                <ul className="flex gap-5"  >
                    
                    <li onClick={handleMobileMenu}> <HiOutlineMenu  size={24} /></li>

                </ul>
                  <ul
  className={`fixed top-0 right-0 h-screen w-3/5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
    ${isMobileMenuShow ? "translate-x-0" : "translate-x-full"} flex flex-col p-6 gap-6`}
>
    <li onClick={handleMobileMenu}> <FaTimes   size={24} /></li>
  <li>
    <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
  </li>
  <li>
    <Link to="/shop" className="text-gray-700 hover:text-blue-500 transition">Shop</Link>
  </li>
   
  <li>
    <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact Us</Link>
  </li>
    <li> <Link to='/profile'>Profile</Link></li>
                    <li><Link to='/cart'>Add To Cart</Link></li>
</ul>

            </div>
        </div>
      </>


    )
}

export default Navbar

