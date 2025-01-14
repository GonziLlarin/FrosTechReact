import { useState } from "react";

function ItemCount(props) {
    let [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count === props.max) return;
        console.log("Suma");
        setCount(count + 1);

    };

    const handleSubstract = () => {

        setCount(count - 1);
    };

    function handleClick() {
        props.onSubmitCount(count);
    }

    return (
        <div className="flex flex-col m-5">
            <div className="text-red-900 font-semibold ">
                <button onClick={handleAdd}>+</button>
                <span>{count}</span>
                <button onClick={handleSubstract}>-</button>
            </div>
            <div >
                <button onClick={handleClick} className="decoration-double text-red-900 font-semibold underline">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;