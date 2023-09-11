import { useState } from "react";

const UseStatePremium = () => {
    const peopleArray = [
        {
          name: "John Doe",
          age: 30,
          city: "New York",
          occupation: "Engineer",
          hobbies: ["Reading", "Hiking", "Gardening"]
        },
        {
          name: "Alice Smith",
          age: 25,
          city: "Los Angeles",
          occupation: "Teacher",
          hobbies: ["Painting", "Yoga", "Traveling"]
        },
        {
          name: "Bob Johnson",
          age: 35,
          city: "Chicago",
          occupation: "Doctor",
          hobbies: ["Cooking", "Running", "Photography"]
        },
        {
          name: "Eva Williams",
          age: 28,
          city: "San Francisco",
          occupation: "Designer",
          hobbies: ["Drawing", "Cycling", "Singing"]
        },
        {
          name: "Michael Brown",
          age: 32,
          city: "Miami",
          occupation: "Lawyer",
          hobbies: ["Swimming", "Playing Tennis", "Watching Movies"]
        }
      ];

      const [data, setData] = useState(peopleArray);

      const handleRemoveAll = () =>{
        setData([])
      }
      const handleRemove = (name) =>{
        const removeData = data.filter((item) => item.name !== name);
        setData(removeData);
      }

    return (
        <div className="text-3xl font-bold my-6 text-center mt-10">
            {
                data.map((item, index) => (<div key={index}>
                    <h1>Name: {item.name}  </h1>
                    <button onClick={() => handleRemove(item.name)} className="btn btn-warning my-3">Remove</button>
                </div>))
            }
            <button onClick={handleRemoveAll} className="btn btn-primary mt-6">Remove All</button>
        </div>
    );
};

export default UseStatePremium;