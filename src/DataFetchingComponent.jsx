import React, { useEffect, useState, useContext } from 'react';
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const DataContext = React.createContext();

function DataFetchingComponent({ children }) {
    const [data, setData] = useState({ productos: [] });
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const productsCollection = category ? query(collection(db, "productos"),
                    where("category", "==", category)) : collection(db, "productos");
                const res = await getDocs(productsCollection)

                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setData({ productos: list })
            } catch (error) {
                console.log("error fetchin firestore data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);
    console.log(data)

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
}

// Función personalizada para utilizar el contexto
function useDataContext() {
    return useContext(DataContext);
}

export { DataFetchingComponent, useDataContext };