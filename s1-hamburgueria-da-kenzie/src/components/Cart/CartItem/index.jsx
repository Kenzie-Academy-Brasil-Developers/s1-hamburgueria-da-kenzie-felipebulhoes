import React from "react";
import { CartItemLi } from "./style";

const CartItem = ({ sale, deleteProduct }) => {
  return (
    <CartItemLi>
      <img src={sale.img} alt="" />
      <div className="cartItemMain">
        <div className="cartItemInfo">
          <h4>{sale.name}</h4>
          <span>{sale.category}</span>
        </div>
        <span onClick={() => deleteProduct(sale.id)} className="removeItem">
          Remover Item
        </span>
      </div>
    </CartItemLi>
  );
};

export default CartItem;
