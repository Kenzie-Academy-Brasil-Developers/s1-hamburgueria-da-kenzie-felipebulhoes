import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { CartSection } from "./style";

const Cart = ({ currentSale, cartTotal, deleteProduct, deleteAll }) => {
  return (
    <CartSection>
      <div className="welcomeDiv">
        <span>Carrinho de compras</span>
      </div>
      <ul>
        {currentSale.length ? (
          currentSale.map((sale) => (
            <CartItem
              key={sale.id}
              sale={sale}
              deleteProduct={deleteProduct}
            ></CartItem>
          ))
        ) : (
          <li className="NoItens">
            <h2>Não há itens no carrinho</h2>
          </li>
        )}
      </ul>
      {currentSale.length ? (
        <CartTotal cartTotal={cartTotal} deleteAll={deleteAll}></CartTotal>
      ) : (
        <></>
      )}
    </CartSection>
  );
};

export default Cart;
