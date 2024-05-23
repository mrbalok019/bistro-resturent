import React, { useEffect, useState } from "react";

const OurShopCard = ({category}) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const categoryItems = data.filter((item) => item.category === category);
        setMenu(categoryItems);
      });
  }, [category]);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((food) => (
          <div key={food._id}>
            <div className="card w- bg-base-100 shadow-xl">
              <figure>
                <img
                  src={food.image}
                  alt={food.category}
                />
                
              </figure>
              <p className="text-white bg-slate-900 absolute right-0 mt-4 mr-4 p-2"> ${food.price} </p>
              <div className="card-body">
                <h2 className="card-title justify-center">{food.name} </h2>
                <p>{food.recipe} </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-ghost border-b-4 border-yellow-600 ">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurShopCard;
