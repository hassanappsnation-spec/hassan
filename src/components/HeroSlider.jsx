import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Modern Web Development",
    desc: "Build fast websites with React",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: 2,
    title: "React + Tailwind",
    desc: "Create beautiful UI easily",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 3,
    title: "Frontend Engineering",
    desc: "Make responsive web apps",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
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
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[700px]">
              {slide.desc}
            </p>

          </div>
        </div>
      ))}

      {/* Buttons */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 px-3 py-2 rounded text-white"
      >
        ❮
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 px-3 py-2 rounded text-white"
      >
        ❯
      </button>

    </div>
  );
}