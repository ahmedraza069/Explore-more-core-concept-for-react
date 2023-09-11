const Card = (props) => {
console.log(props)
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="card-image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.item.name}</h2>
          <p>100k</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
