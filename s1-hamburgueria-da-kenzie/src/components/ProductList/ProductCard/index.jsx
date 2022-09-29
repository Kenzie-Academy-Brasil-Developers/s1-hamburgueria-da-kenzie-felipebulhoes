import React from "react";
import { ProductCardLi } from "./style";

const ProductCard = ({ product, HandleClick }) => {
  return (
    <ProductCardLi>
      <div className="cardImgDiv">
        <img src={product.img} alt="" />
      </div>
      <div className="cardInfoDiv">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>R$ {product.price}</span>
        <button onClick={() => HandleClick(product.id)}>Adicionar</button>
      </div>
    </ProductCardLi>
  );
};

export default ProductCard;
