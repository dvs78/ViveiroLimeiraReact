import React, { useState, useEffect } from "react";
import ProductFilters from "./ProductFilters";
import ProductsContainer from "./ProductsContainer";

const MainSection = () => {
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  return (
    <>
      <ProductFilters onFiltrar={setProdutosFiltrados} />
      <ProductsContainer produtos={produtosFiltrados} />
    </>
  );
};

export default MainSection;
