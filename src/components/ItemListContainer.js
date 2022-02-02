import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer() {

    const { id } = useParams();

    const [productList, setProductsList] = useState([]);

    useEffect(() => {
        if (id) {
            const db = getFirestore();
            const q = query(collection(db, "items"), where("category", "==", id));
            getDocs(q).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('no results');
                } else {
                    setProductsList(snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    })));
                }
            })
        } else {
            const db = getFirestore();
            const productsCollection = collection(db, "items");
            getDocs(productsCollection).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('no results');
                } else {
                    setProductsList(snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    })));
                }
            })
        }
    });


    if (productList.length === 0) {
        return <p>Cargando...</p>
    } else {
        return (
            <div>
                <ItemList productos={productList} />
            </div>
        )
    }
}

export default ItemListContainer;