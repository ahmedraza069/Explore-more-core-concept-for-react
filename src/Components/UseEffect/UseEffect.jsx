import { useEffect, useState } from "react";

const UseEffect = () => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('running from use effect')
    }, [])

    const handleAdd = () =>{
        setValue(value + 1);
    }
    return (
        <div className="text-center font-bold text-3xl mt-5">
            <hr />
            <h2>Count : {value}</h2>
            <button onClick={handleAdd} className="btn btn-warning mt-4">Add</button>
        </div>
    );
};

export default UseEffect;