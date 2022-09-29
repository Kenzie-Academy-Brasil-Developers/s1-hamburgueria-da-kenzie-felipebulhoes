import React from "react";
import { CartTotalSection } from "./styles";

const CartTotal = ({ cartTotal, deleteAll }) => {
  const rounded = Math.round(cartTotal * 100) / 100;
  return (
    <CartTotalSection>
      <div>
        <p>Total</p>
        <span>R${rounded}</span>
      </div>
      <button onClick={() => deleteAll()}>Remover todos</button>
    </CartTotalSection>
  );
};

export default CartTotal;
