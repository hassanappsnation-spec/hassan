import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="bg-white shadow-md rounded-xl p-10 text-center">
            <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
               <Link to={`/product/${item.uid}`}>

              <div
                key={item.id}
                className="bg-white my-6 rounded-2xl shadow-sm hover:shadow-md transition p-5 flex items-center gap-6"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={item.images || item.image}
                    alt={item.title}
                    className="object-contain h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Price: <span className="font-medium">${item.price}</span>
                  </p>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm text-gray-500">Qty:</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                      {item.quantity}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="text-right">
                  <p className="text-gray-500 text-sm">Total</p>
                  <p className="text-lg font-semibold text-gray-800">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
              </Link>
            ))}

            {/* Cart Summary */}
            <div className="bg-white rounded-2xl shadow-md p-6 mt-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Order Summary
              </h3>

              <div className="flex justify-between text-gray-600 mb-2">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between text-gray-800 font-semibold text-lg border-t pt-3">
                <span>Total</span>
                <span>
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>

              <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;