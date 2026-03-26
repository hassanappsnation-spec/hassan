import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Bianca G.",
    rating: 5,
    date: "2 days ago",
    title: "Absolutely Exquisite!",
    text: "From the moment I unboxed this, I was impressed by the quality.",
    img: "https://placehold.co/80x80/9ca3af/ffffff/png?text=B"
  },
  {
    id: 2,
    name: "Leo K.",
    rating: 4,
    date: "1 week ago",
    title: "Solid Product",
    text: "Does exactly what it says. Very happy with the purchase.",
    img: "https://placehold.co/80x80/1e293b/ffffff/png?text=L"
  },
  {
    id: 3,
    name: "Ramona C.",
    rating: 5,
    date: "3 weeks ago",
    title: "Changed my workflow",
    text: "A truly innovative solution. Highly recommended!",
    img: "https://placehold.co/80x80/c026d3/ffffff/png?text=R"
  },

  // ✅ NEW 3 CARDS
  {
    id: 4,
    name: "Ahmed R.",
    rating: 5,
    date: "1 month ago",
    title: "Amazing Experience",
    text: "Everything was smooth and fast. Loved it!",
    img: "https://placehold.co/80x80/0ea5e9/ffffff/png?text=A"
  },
  {
    id: 5,
    name: "Sara M.",
    rating: 4,
    date: "2 months ago",
    title: "Good but can improve",
    text: "Overall great but needs small improvements.",
    img: "https://placehold.co/80x80/f43f5e/ffffff/png?text=S"
  },
  {
    id: 6,
    name: "John D.",
    rating: 5,
    date: "3 months ago",
    title: "Highly Recommended",
    text: "One of the best products I have used!",
    img: "https://placehold.co/80x80/22c55e/ffffff/png?text=J"
  }
];

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gray-50 py-20 my-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews
        </h2>

        {/* Slider */}
        <div className="relative">

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(index, index + 3).map((review) => (
              <div key={review.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

                {/* Stars + Date */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-1 text-gray-300">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < review.rating ? "text-yellow-400" : ""}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-1">
                  {review.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t pt-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium text-gray-800">
                    {review.name}
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}