import { useState } from "react";
export default function ItemCount() {

    const [count, setCount] = useState(0);

    function onAdd() {
        setCount((prevCount) => (prevCount < 5 ? prevCount + 1 : prevCount));
    }

    function onSubstract() {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }

    return (
        <div className="contador">
            <button onClick={onAdd}> + </button>
            <p>{count}</p>
            <button onClick={onSubstract}> - </button>
        </div>
    )
}
