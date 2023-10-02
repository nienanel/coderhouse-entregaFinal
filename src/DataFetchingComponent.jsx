import React, { useEffect, useState, useContext } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const DataContext = React.createContext();

function DataFetchingComponent({ children }) {
    const [data, setData] = useState({ productos: [] });
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!category) {
                    setLoading(false)
                    console.log("No category")
                    return;
                }

                const db = getFirestore();
                const productsCollection = doc(db, 'productos');
                const querysnapshot = await getDoc(productsCollection);

                // Imprimir los datos de Firestore en la consola
                console.log("Datos de Firestore:", querysnapshot.data());

                const productsData = querysnapshot.data();

                //filtro por categoria
                const filteredProducts = category
                    ? productsData.filter(product => product.category === category)
                    : productsData;

                setData({ productos: filteredProducts });

            } catch (error) {
                console.error('Error fetching Firestore data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

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