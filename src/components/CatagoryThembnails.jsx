import React from 'react'
import catagoryThtmtnailBg1 from "../assets/catagoryThamnails/banner-1.jpg"
import catagoryThtmtnailBg2 from "../assets/catagoryThamnails/banner-2.jpg"
import catagoryThtmtnailBg3 from "../assets/catagoryThamnails/banner-3.jpg"
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const CatagoryThembnails = () => {
    const catagoryThemnailObj = [{
      title: 'Watches',
      price: '$99.00',
      bgImage: catagoryThtmtnailBg1,
      link: '/shop'
    }, {
      title: 'Plo Bag',
      price: '$79.00',
      bgImage: catagoryThtmtnailBg2,
      link: '/shop'
    }, {
      title: 'Sunglass', 
      price: ' $29.00',
      bgImage: catagoryThtmtnailBg3,
      link: '/shop'
    }]

  return (
    <>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-8">
  {catagoryThemnailObj.map((item, index) => {
    return (
      <div
        key={index}
        className="group relative overflow-hidden h-[220px] cursor-pointer"
      >
        <Link to={item.link}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center 
          transition-transform duration-500 
          group-hover:scale-y-125"
          style={{
            backgroundImage: `url(${item.bgImage})`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-6 text-black">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p>
            Starting at <span>{item.price}</span>
          </p>

          <div className="relative -bottom-20 mt-4 text-2xl">
            <Link to={item.link}>
              <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
        </Link>
      </div>
    );
  })}
</div>
    </>
  )
}

export default CatagoryThembnails