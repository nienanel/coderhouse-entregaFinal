import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
export default function ItemListContainer() {
    const { category } = useParams();
    const getCategoryTitle = () => {
        switch (category) {
            case 'Mountain':
                return 'Productos de Montaña';
            case 'Race':
                return 'Productos de Carrera';
            default:
                return 'Lista de Productos';
        }
    };

    return (
        <div className="ItemList-Container">
            <h1 style={{ color: "red", textAlign: "center" }}>{getCategoryTitle()}</h1>
            <ItemList />
        </div>
    );
}