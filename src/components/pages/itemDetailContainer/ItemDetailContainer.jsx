import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const {id} = useParams() 
  const [product, setProduct] = useState({});

  useEffect(() => {
    // aquí uso "producto.id" porque "producto" es el elemento del array que .find está iterando
    const element = productsMock.find((producto) => producto.id === id);
    setProduct(element);
  }, [id]);

  return (
    <div>
      <h3>{product?.title}</h3>
      <h3>{product?.price}</h3>
      <h3>{product?.description}</h3>
      <button>agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
