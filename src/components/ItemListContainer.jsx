import "./ItemListContainer.css";
import ItemList from "./ItemList";
export default function ItemListContainer ({greeting}) {
    return (
        <div className="ItemList-Container">
        <h1 style={{color: "black"}}>{greeting}</h1>
        <ItemList />
        </div>
    );
}