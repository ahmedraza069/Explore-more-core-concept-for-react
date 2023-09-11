
const Parent = ({value, setValue}) => {

    const handleAdd = () => {
        setValue(value + 1)
    }
    return (
        <div>
           <div className="text-center font-bold text-3xl mt-5">
            <hr />
            <h2>Parent Count :{value}</h2>
            <button onClick={handleAdd} className="btn btn-warning mt-4">Add</button>
        </div>
        </div>
    );
};

export default Parent;