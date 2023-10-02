import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore"; // Make sure to import Firestore functions

import ItemDetail from './ItemDetail';
import BuyButton from './Cart/BuyButton';

function ItemDetailContainer() {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();

        const itemRef = doc(db, "productos", id);

        getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setSelectedItem({ id: snapshot.id, ...snapshot.data() });
                }
            })
            .catch((error) => {
                console.error("Error fetching document:", error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, [id]); 

    return (
        <div className="itemDetailContainer">
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <React.Fragment>
                    <ItemDetail item={selectedItem} />
                    <BuyButton product={selectedItem} />
                </React.Fragment>
            )}
        </div>
    );
}

export default ItemDetailContainer;