import React, { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/features/ProductSlice";
import { addToCart } from "../redux/features/cartSlice";
import { ClimbingBoxLoader } from "react-spinners";
import { FaEye, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsCards = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.product);

  useLayoutEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClimbingBoxLoader />
      </div>
    );
  }

  if (!items || items.length === 0) {
    return <p className="text-center mt-10">No products available</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => (
          <div
            key={product.uid} // ✅ unique key
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="bg-gray-100 h-56 flex items-center justify-center p-4 relative group overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full  object-cover transition duration-300 group-hover:scale-105"
              />

              {/* Hover buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 backdrop-blur-md bg-white/20 transition-all duration-250">
                <Link to={`/product/${product.uid}`}>
                  <button className="bg-white/80 p-3 rounded-full hover:bg-white transition">
                    <FaEye size={18} />
                  </button>
                </Link>
                <button
                  onClick={() =>  dispatch(addToCart({ ...product, id: product.uid, quantity: 1 }))}
                  className="bg-white/90 p-3 rounded-full hover:bg-white transition"
                >
                  <FaShoppingCart size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-44">
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
                {product.discountedPrice && (
                  <span className="text-sm text-red-500 ml-auto">
                    ${product.discountedPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              {/* Stock */}
              <p className="text-xs text-gray-500 mt-1">
                {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;