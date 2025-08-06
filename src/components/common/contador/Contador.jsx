import { useEffect, useState } from "react";
export const Contador = ({name}) => {
    //contador ----> stContador y asi
    const [contador,setContador] =useState(0) //[variable , funcion]
  const sumar = () => {
     setContador(contador +1);
  };
  useEffect(()=> {
    console.log(
        "holuuu"
    );
    console.log(name);
  },[name])
  return (
    <div>
        <h2>este es el contador</h2>
        <h3>{contador}</h3>
        <button onClick={sumar}>Sumar contador</button>
    </div>
  );
};
