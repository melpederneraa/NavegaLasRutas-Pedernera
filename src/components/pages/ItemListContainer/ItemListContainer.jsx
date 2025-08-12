import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {name}= useParams()
  useEffect(() => {
    const productosfiltrados = productsMock.filter(
      (producto) => producto.category === name
    )
    const getProducts = new Promise((resolve, reject) => {
      resolve(name ? productosfiltrados : productsMock);
    });
    getProducts.then((res) => setItems(res));
  }, [name]);

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
