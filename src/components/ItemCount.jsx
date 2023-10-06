import React, { useState } from "react";
export default function ItemCount({ initialCount, onCountChange }) {

    const [count, setCount] = useState(initialCount);

    const handleAdd = () => {
        if (count < 5) {
            setCount(count + 1);
            onCountChange(count + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 0) {
            setCount(count - 1);
            onCountChange(count - 1);
        }
    };

    return (
        <div className="contador">
            <button onClick={handleAdd}> + </button>
            <p>{count}</p>
            <button onClick={handleSubtract}> - </button>
        </div>
    )
}
