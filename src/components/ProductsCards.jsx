import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/features/ProductSlice'
import { FaEye, FaShoppingCart } from 'react-icons/fa'
import { ClimbingBoxLoader } from 'react-spinners'
import { addToCart } from '../redux/features/cartSlice';

const ProductsCards = () => {
  const dispatch = useDispatch()
  const { item, loading } = useSelector((state) => state.Product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold animate-pulse"><ClimbingBoxLoader /></h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {item.map((product) => (
          
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

              {/* Image */}
              <div className="bg-gray-100 h-56 flex items-center justify-center p-4 relative group overflow-hidden">

                {/* Image */}
                <img
                  src={product.images || product.image}
                  alt={product.title}
                  className="h-full object-contain transition duration-300 group-hover:scale-105"
                />

                {/* Glass Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4
                  opacity-0 group-hover:opacity-100
                  backdrop-blur-md bg-white/20
                  transition-all duration-300">

                  {/* View */}
                  <Link to={`/product/${product.id}`}>
                    <button className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition">
                      <FaEye size={18} />
                    </button>
                  </Link>

                  {/* Cart */}
                  <button onClick={() => dispatch(addToCart(product))} className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition">
                    <FaShoppingCart size={18} />
                  </button>

                </div>

              </div>

                    <Link key={product.id} to={`/product/${product.id}`}>
              {/* Content */}
              <div className="p-4 flex flex-col justify-between h-36">

                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-lg font-bold text-green-600">
                    ${product.price}
                  </p>

                  <button className="text-xs bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition">
                    View
                  </button>
                </div>

              </div>
          </Link>

            </div>

        ))}

      </div>
    </div>
  )
}

export default ProductsCards