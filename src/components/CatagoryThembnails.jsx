import React from 'react'
import catagoryThtmtnailBg1 from "../assets/catagoryThamnails/banner-1.jpg"
import catagoryThtmtnailBg2 from "../assets/catagoryThamnails/banner-2.jpg"
import catagoryThtmtnailBg3 from "../assets/catagoryThamnails/banner-3.jpg"
const CatagoryThembnails = () => {
  return (
    <>
    <div className="grid grid-cols-3">
        <div className=""   style={{ 
    backgroundImage: `url(${catagoryThtmtnailBg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  }}>
            <h3>Watchs</h3>
            <p>Starting at <span>$99.00</span></p>
            <p>Starting at <span>$99.00</span></p>
        </div> 
        <div className=""></div>
        <div className=""></div>
    </div>
    </>
  )
}

export default CatagoryThembnails