import { useState } from "react";

const UseState = () => {

    const [value, setValue] = useState(0);
    const handlePlus = () => {
        setValue(value + 1)
    }
    const handleMinus = () =>{
        setValue(value - 1)
    }
    return (
        <div className="text-3xl font-medium my-6 text-center mt-10">
            <h1>Exploring Hook</h1>
            <h1 className="my-5">Count : {value}</h1>
            <button onClick={handlePlus} className="btn btn-success mr-5">Add</button>
            <button onClick={handleMinus} className="btn btn-primary">Minus</button>
        </div>
    );
};

export default UseState;