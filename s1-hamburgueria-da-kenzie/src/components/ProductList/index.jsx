import React from "react";
import ProductCard from "./ProductCard";
import { ProductListSection } from "./style";

const ProductList = ({ products, filteredProducts, HandleClick }) => {
  return (
    <ProductListSection>
      <ul>
        {filteredProducts.length
          ? filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                HandleClick={HandleClick}
              ></ProductCard>
            ))
          : products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                HandleClick={HandleClick}
              ></ProductCard>
            ))}
      </ul>
    </ProductListSection>
  );
};

export default ProductList;
