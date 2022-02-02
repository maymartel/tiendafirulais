import React from "react";

function ItemDetail({ producto, addToCart }) {


    return (
        <div className="producto-detallado" key={producto.id} id={producto.id}>
            <img src={producto.imageUrl} className="producto-img-detail" alt={producto.title} />
            <div className="producto-detalles">
                <div>
                    <p className="producto-nombre">{producto.title}</p>
                    <p className="producto-precio">${producto.price}</p>
                    <p className="producto-descripcion">{producto.description}</p>
                </div>
                <button className="button" onClick={() => addToCart(producto.id, 1)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemDetail;