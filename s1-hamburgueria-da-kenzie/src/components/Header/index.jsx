import React from "react";
import logo from "./assets/logo.svg";
import { HeaderStyled } from "./style";

const Header = ({ searchProducts }) => {
  return (
    <HeaderStyled>
      <div>
        <img src={logo} alt="" />
      </div>
      <form>
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={(event) => searchProducts(event.target.value)}
        />
      </form>
    </HeaderStyled>
  );
};

export default Header;
