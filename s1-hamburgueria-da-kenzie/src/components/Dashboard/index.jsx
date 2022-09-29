import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../Header/index";
import ProductList from "../ProductList";
import Cart from "../Cart";
import "./style.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    api.get("").then((res) => setProducts(res.data));
  }, []);

  function HandleClick(id) {
    const produtoEncontrado = products.find((prod) => prod.id === id);
    const produtoIncluido = currentSale.includes(produtoEncontrado);
    produtoIncluido
      ? alert("Já estou na lista")
      : setCurrentSale([...currentSale, produtoEncontrado]);
  }

  useEffect(() => {
    const values = currentSale.map((value) => value.price);
    const total = values.reduce((prev, curr) => prev + curr, 0);
    setCartTotal(total);
  }, [currentSale]);

  function searchProducts(value) {
    if (value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.name === value || product.category === value
      );
      if (filtered.length) {
        setFilteredProducts(filtered);
      }
    }
  }

  function deleteProduct(id) {
    const newArr = currentSale.filter((product) => product.id !== id);
    setCurrentSale(newArr);
  }

  function deleteAll() {
    setCurrentSale([]);
  }

  return (
    <main>
      <Header searchProducts={searchProducts}></Header>
      <section className="mainInfo">
        <ProductList
          products={products}
          filteredProducts={filteredProducts}
          HandleClick={HandleClick}
        ></ProductList>
        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          deleteProduct={deleteProduct}
          deleteAll={deleteAll}
        ></Cart>
      </section>
    </main>
  );
};

export default Dashboard;

//currentSale.reduce((prev, curr) => prev + curr)
