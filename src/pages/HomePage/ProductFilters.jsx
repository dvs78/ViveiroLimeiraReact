import React, { useState, useEffect } from "react";
import { produtosArray } from "../../assets/database/produtos";
import { obterListaUnica } from "../../utils/funcoesDiversas";

const ProductFilters = ({ onFiltrar }) => {
  const [filtros, setFiltros] = useState({
    ano: "",
    cultivar: "",
    embalagem: "",
  });

  const anos = obterListaUnica(produtosArray, "ano");
  const cultivares = obterListaUnica(produtosArray, "cultivar");
  const embalagens = obterListaUnica(produtosArray, "embalagem");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  // Atualiza lista filtrada sempre que os filtros mudam
  useEffect(() => {
    const resultado = produtosArray.filter((item) => {
      return (
        (filtros.ano === "" || item.ano === Number(filtros.ano)) &&
        (filtros.cultivar === "" || item.cultivar === filtros.cultivar) &&
        (filtros.embalagem === "" || item.embalagem === filtros.embalagem)
      );
    });

    onFiltrar(resultado);
  }, [filtros]);

  return (
    <section className="main__select">
      <select
        name="ano"
        value={filtros.ano}
        onChange={handleChange}
        className="filtro-select"
      >
        <option value="">Ano</option>
        {anos.map((ano) => (
          <option key={ano} value={ano}>
            {ano}
          </option>
        ))}
      </select>

      <select
        name="cultivar"
        value={filtros.cultivar}
        onChange={handleChange}
        className="filtro-select"
      >
        <option value="">Cultivar</option>
        {cultivares.map((cultivar) => (
          <option key={cultivar} value={cultivar}>
            {cultivar}
          </option>
        ))}
      </select>

      <select
        name="embalagem"
        value={filtros.embalagem}
        onChange={handleChange}
        className="filtro-select"
      >
        <option value="">Embalagem</option>
        {embalagens.map((embalagem) => (
          <option key={embalagem} value={embalagem}>
            {embalagem}
          </option>
        ))}
      </select>

      <button
        className="main__button--limpar"
        type="button"
        onClick={() => setFiltros({ ano: "", cultivar: "", embalagem: "" })}
      >
        Limpar filtros
      </button>
    </section>
  );
};

export default ProductFilters;
