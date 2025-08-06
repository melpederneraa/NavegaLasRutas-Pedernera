import { CustomButton } from "../customButton/CustomButton";
import { BsCart4 } from "react-icons/bs";
export const CartWidget = () => {
  return (
    <div>
        <h2>El icono de un carrito</h2>
        <h2>burbuja</h2>
        <CustomButton texto = {"sumar"} />
        <BsCart4 />
    </div>
  )
}
