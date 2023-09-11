import { useEffect, useState } from "react";


const FetchData = () => {

const [data, setData] = useState([])

useEffect(() => {
    const fetchData = async () => {
        try {
            const URL = `https://openapi.programming-hero.com/api/videos/category/1000`
            const res = await fetch(URL)
            const data = await res.json()
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
},[])

    return (
        <div className="my-16">
            {
                data && data.map((item, index) => (
                    <h1 className="text-3xl font-bold my-4 text-center" key={index}>Name : <span className="text-2xl text-red-500">{item.title}</span></h1>
                ))
            }
        </div>
    );
};

export default FetchData;