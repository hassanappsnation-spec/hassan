import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsCards from './ProductsCards'

function ProductDetail() {
  const { id } = useParams();

  const { item } = useSelector((state) => state.Product);

  const product = item.find((p) => p.id === Number(id));

  if (!product) return <h2>Loading or Product not found...</h2>;

  return (
   <>
    <div style={{ padding: "20px" }} className="mt-30">
      <img src={product.images||product.image} alt={product.title} width="300" />
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <p>{product.description}</p>
    </div>
     </>
  );
}

export default ProductDetail;