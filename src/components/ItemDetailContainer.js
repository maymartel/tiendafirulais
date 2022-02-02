import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from "./ItemDetail";
import CartContext from "./context/CartContext";
import { TYPES } from "./context/CartActions";

function ItemDetailContainer() {

    const { id } = useParams();

    const [productoElegido, setProductoElegido] = useState();
    useEffect(() => {
        const db = getFirestore();
        const data = doc(db, "items", id);
        getDoc(data).then((snapshot) => {
            setProductoElegido({ id: snapshot.id, ...snapshot.data() });
        })
    }, []);


    const [state, dispatch] = useContext(CartContext)

    const addToCart = (id, quantity) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: { id, quantity } })
    }


    if (!productoElegido) {
        return <p>Buscando producto...</p>
    } else {
        return (
            <div className="container-item-detail">
                <ItemDetail producto={productoElegido} addToCart={addToCart} />
            </div>
        )
    }

}

export default ItemDetailContainer;