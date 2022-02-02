import React, { useContext, useState, useEffect } from "react";
import carritoLogo from '../media/icons/carrito.png';
import CartContext from "./context/CartContext";

const CartWidget = () => {

    const [state, dispatch] = useContext(CartContext);
    const { cart } = state;

    let cantidad = cart.map((producto) => {
        return producto.quantity;
    });

    let cantidadTotal = cantidad.reduce((a, b) => a + b, 0);

    const [estado, setEstado] = useState();
    useEffect(() => {
        if (cart.length === 0) {
            setEstado("apagado")
            console.log(estado);
        } else {
            setEstado("prendido")
            console.log(estado);
        }
    }, [estado, cart])




    return (


        <div className={estado}>
            <img src={carritoLogo} alt="" className="carrito-logo" />
            <p>{cantidadTotal}</p>

        </div>

    )
}

export default CartWidget;