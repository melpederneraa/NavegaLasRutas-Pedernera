import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import ProductCard from "../../common/productCard/ProductCard";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(productsMock);
    });
    getProducts.then((res) => setItems(res));
  }, []);

  return (
    <div>
      <h1>Mis productos</h1>
      
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} product={elemento} />;
        })}
      </div>
    </div>
  );
};
