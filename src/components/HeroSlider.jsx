import { useState, useEffect } from "react";
import bannerBackgroundImg1 from "../assets//heroSlides-Image/slider1.jpg"
import bannerBackgroundImg2 from "../assets//heroSlides-Image/slider2.jpg"
import { Link } from "react-router-dom";
const slides = [
  {
    id: 1,
    title: "Summer Offer 2020 Collection",
    desc: "___Sale Off 20%",
    img: bannerBackgroundImg1
  },
  {
    id: 2,
    title: "Summer Offer 2020 Collection",
    desc: "___Sale Off 40%",
    img: bannerBackgroundImg2
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const slider = setInterval(nextSlide, 5000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="md:px-6 md:pt-4">
  <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">

    {slides.map((slide, index) => (
      <div
        key={slide.id}
        style={{ backgroundImage: `url(${slide.img})` }}
        className={`
          absolute w-[120%] md:w-full h-full 
          bg-cover bg-center md:bg-left bg-no-repeat
          aspect-[12/3] md:aspect-[16/9]
          transition-opacity duration-700
          ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
        `}
      >

        {/* Overlay */}
        <div className="absolute inset-0  flex flex-col justify-center items-center md:items-end text-center md:text-right px-6 md:pr-20 text-black">
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg wow lg:text-xl max-w-[700px] mb-2">
            {slide.desc}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-[600px]">
            {slide.title}
          </h1>

          {/* Button */}
            <Link to='/shop'>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
            Shop Now
          </button>
            </Link>

        </div>
      </div>
    ))}

    {/* Navigation Buttons */}
    <button
      onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 px-4 py-2 rounded text-black text-3xl z-20 transition"
    >
      ❮
    </button>

    <button
      onClick={() => setCurrent((current + 1) % slides.length)}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 px-4 py-2 rounded text-black text-3xl z-20 transition"
    >
      ❯
    </button>

    {/* Dots Navigation */}
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
      {slides.map((_, idx) => (
        <span
          key={idx}
          onClick={() => setCurrent(idx)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            idx === current ? "bg-white" : "bg-white/50"
          } transition`}
        ></span>
      ))}
    </div>

  </div>
</div>
  );
}