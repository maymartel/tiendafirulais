import React from "react";
import { NavLink } from "react-router-dom";

const Thanks = ({ nameBuyer }) => {

    return (
        <div className="thanks">
            <p>
                Gracias por tu compra {nameBuyer}!
            </p>
            <NavLink to="/"><button>Seguir comprando</button></NavLink>
        </div>

    )
}

export default Thanks;