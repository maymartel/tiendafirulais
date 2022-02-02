import React, { useReducer, useState, useEffect } from "react";
import { useContext } from "react";
import CartContext from "./CartContext";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import CartReducer, { cartInitialState } from "./CartReducer";



const CartProvider = ({ children }) => {

    const [store, dispatch] = useReducer(CartReducer, cartInitialState);

    return <CartContext.Provider value={[store, dispatch]}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;