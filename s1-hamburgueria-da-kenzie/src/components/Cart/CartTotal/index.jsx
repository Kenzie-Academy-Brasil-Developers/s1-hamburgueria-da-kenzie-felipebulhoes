import React from "react";
import { CartTotalSection } from "./styles";

const CartTotal = ({ cartTotal }) => {
  const rounded = Math.round(cartTotal * 100) / 100;
  return (
    <CartTotalSection>
      <div>
        <p>Total</p>
        <span>R${rounded}</span>
      </div>
      <button>Remover todos</button>
    </CartTotalSection>
  );
};

export default CartTotal;
