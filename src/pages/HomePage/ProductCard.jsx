import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";

const ProductCard = ({
  id,
  ano,
  cultivar,
  semente,
  embalagem,
  producao,
  pedido,
}) => {
  return (
    <article id={id} className="card-product">
      <div className="card-product__icon-wrapper">
        <FontAwesomeIcon className="card-product__icon" icon={faCartPlus} />
      </div>

      <h3 className="card-product__tittle">{cultivar}</h3>
      <h4 className="card-product__text">{embalagem}</h4>
      <h4 className="card-product__text">{semente}</h4>
      <h5 className="card-product__text">{ano}</h5>
      <h5 className="card-product__text">
        Produção: {Number(producao).toLocaleString("pt-BR")}
      </h5>
      <h5 className="card-product__text">
        Pedido: {Number(pedido).toLocaleString("pt-BR")}
      </h5>
      <h5 className="card-product__text">
        Estoque: {(Number(producao) - Number(pedido)).toLocaleString("pt-BR")}
      </h5>
    </article>
  );
};

export default ProductCard;
