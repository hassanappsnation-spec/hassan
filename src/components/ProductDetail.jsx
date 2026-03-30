import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsCards from './ProductsCards'
import { BiArrowFromLeft, BiArrowFromRight, BiStar } from "react-icons/bi";
import ReviewSlider from "./ReviewSlider";
import Breadcrumb from "./Breadcrumb";
import { addToCart } from "../redux/features/cartSlice";

function ProductDetail() {

 let [qty, setQty] = useState(1);
  const cartItems = useSelector((state) => state.cart.cartItem);

const dispatch = useDispatch()
  const { id } = useParams();

  const { item } = useSelector((state) => state.Product);

  const product = item.find((p) => p.id === Number(id));

  if (!product) return <h2>Loading or Product not found...</h2>;

  return (
   <>

   <div className="mt-30">  
  <Breadcrumb product={product}/>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-0 mt-30 md:mt-30">
    <div className="image-div"> 
      <img src={product.images||product.image} alt={product.title} width="300"  className="mx-auto p-10 bg-gray-300"/>
    </div>

    <div className="containt-div">
      <h1 className="text-4xl font-semibold">{product.title}</h1>
      <div className="flex gap-4 my-6">
      <BiStar style={{color:'yellow', fontSize:'24px'}}/>
      <BiStar  style={{color:'yellow', fontSize:'24px'}}/>
      <BiStar  style={{color:'yellow', fontSize:'24px'}}/>
      <BiStar  style={{color:'yellow', fontSize:'24px'}}/>
      <BiStar  style={{ fontSize:'24px'}}/>

      </div>
      <h2 className="text-3xl text-red-400 ">${product.price}</h2>
      <p className="mt-10">{product.description}</p>
      <div className="flex gap-9 my-20">
      <div className="card-button-div flex gap-5 items-center">
        <button onClick={()=>{if (qty<=0){
         return false
        } else{
          setQty(qty-1)
        }{
          
        }}}>-</button>
        <p>{qty}</p>
        <button  onClick={()=>{setQty(qty+1)}}>+</button>
      </div>
   <button
  onClick={() => {
    if (qty > 0) {
      dispatch(addToCart({ product, quantity: qty }));
    } else {
      alert("Select quantity");
    }
  }}
  className="bg-gray-600 text-white py-3 px-4"
>
  Add to Cart
</button>
      </div>

    </div>
   </div>

   <ReviewSlider/>
   <div>
    <h2 className="flex items-center justify-center gap-4 text-3xl md:text-5xl font-bold text-gray-800">
  
  <span className="text-blue-500 text-4xl md:text-5xl">
    <BiArrowFromRight />
  </span>

  <span className="tracking-wide uppercase">
    Related Products
  </span>

  <span className="text-blue-500 text-4xl md:text-5xl">
    <BiArrowFromLeft />
  </span>

</h2>
   </div>


      <ProductsCards/>
     </>
  );
}

export default ProductDetail;