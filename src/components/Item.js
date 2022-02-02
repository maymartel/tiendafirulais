import React from "react";
import { NavLink } from "react-router-dom";

function Item({ producto }) {
    return (
        <div className="producto">
            <img src={producto.imageUrl} className="producto-img" alt={producto.title} />
            <NavLink to={`/item/${producto.id}`}><button className="button">Ver Producto</button></NavLink>
        </div>
    )
}

export default Item;