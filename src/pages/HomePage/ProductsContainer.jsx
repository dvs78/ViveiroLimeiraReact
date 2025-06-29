import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ produtos }) => {
  return (
    <div className="container__ProductCard-div">
      {produtos.map((product) => (
        <ProductCard key={`product_${product.id}_key`} {...product} />
      ))}
      {produtos.length === 0 && (
        <p>Nenhum produto encontrado com esses filtros.</p>
      )}
    </div>
  );
};

export default ProductsContainer;
