import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../productos.json";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const selectedId = parseInt(id);
        const selectedItem = productos.find((item) => item.id === selectedId);

        setItem(selectedItem);
        console.log(selectedItem)
        console.log("ID from URL:", id);
        console.log("IDs in productos.json:", productos.map((item) => item.id));
    }, [id]);

    return (
        <div className="itemDetailContainer">
            {item ? (
                <ItemDetail item={item} />
            ) : (
                <h1>Producto no encontrado</h1>
            )}
        </div>
    )
}