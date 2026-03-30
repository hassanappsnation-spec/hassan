import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);

  return (
    <div className="mt-50 p-10">
      <h2 className="text-2xl font-bold mb-5">Cart Items</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border p-4 mb-4">
            <img
              src={item.images || item.image}
              alt={item.title}
              width="100"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;  