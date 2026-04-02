import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsCards from "./ProductsCards";
import { BiArrowFromLeft, BiArrowFromRight, BiStar } from "react-icons/bi";
import ReviewSlider from "./ReviewSlider";
import Breadcrumb from "./Breadcrumb";
import { addToCart } from "../redux/features/cartSlice";
import { ClimbingBoxLoader } from "react-spinners";
import { fetchProducts } from "../redux/features/ProductSlice";

function ProductDetail() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { items, loading } = useSelector((state) => state.product);

  // Fetch products if not already loaded
  useEffect(() => {
    if (!items.length && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length, loading]);


  // Find product safely
  const product = items.find((p) => p.uid === id);

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  return (
    <>
      <div className="mt-10">
        <Breadcrumb product={product} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 flex items-center p-10 md:p-0 mt-10 md:mt-20 gap-10">
        <div className="image-div flex justify-center items-center bg-gray-100 p-6 rounded-xl">
          <img src={product.image} alt={product.title} className="md:max-w-96 lg:w-full object-cover" />
        </div>

        <div className="containt-div flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">{product.title}</h1>

          <div className="flex gap-2">
            {Array.from({ length: 5 }, (_, i) => (
              <BiStar
                key={i}
                style={{ color: i < product.rating ? "yellow" : "#ccc", fontSize: "24px" }}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            {product.oldPrice && <span className="text-gray-400 line-through">${product.oldPrice}</span>}
            <span className="text-3xl font-bold text-green-600">${product.price}</span>
            {product.discountedPrice && <span className="text-red-500">${product.discountedPrice}</span>}
          </div>

          <p className={`mt-2 ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
            {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
          </p>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-3">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span className="font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>

            <button
              onClick={() => dispatch(addToCart({ product, quantity: qty }))}
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ReviewSlider />

      <div className="mt-16">
        <h2 className="flex items-center justify-center gap-4 text-3xl md:text-5xl font-bold text-gray-800">
          <span className="text-blue-500 text-4xl md:text-5xl"><BiArrowFromRight /></span>
          <span className="tracking-wide uppercase">Related Products</span>
          <span className="text-blue-500 text-4xl md:text-5xl"><BiArrowFromLeft /></span>
        </h2>
      </div>

      <ProductsCards />
    </>
  );
}

export default ProductDetail;