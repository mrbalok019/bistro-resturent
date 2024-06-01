import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Style.css';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import UseCart from "./UseCart";


const OurShopCard = ({ category }) => {
  const [menu, setMenu] = useState([]);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
  const axiosSecure = UseAxiosSecure();
  const [,refetch] = UseCart();

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const categoryItems = data.filter((item) => item.category === category);
        setMenu(categoryItems);
      });
  }, [category]);

  // Utility function to chunk array
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Chunk menu array into smaller arrays of 6 items each
  const chunkedMenu = chunkArray(menu, 6);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

// add to card 
  const addToCartHandler =(food)=>{

    const cartFoodId = food._id;
    const cartFoodName = food.name;
    const cartFoodImage = food.image;
    const cartFoodCategory = food.category;
    const cartFoodPrice = food.price;
    const cartFoodRecipe = food.recipe;
    const cartUserEmail = user.email;
     
    const cartFood={cartUserEmail,cartFoodId,cartFoodName,cartFoodImage,cartFoodCategory,cartFoodPrice,cartFoodRecipe};


    if(!user)
      {
        Swal.fire({
                    
          text:'log in to order',
          icon: 'error',
          
        });
        navigate('/login');

      }
      else{
        console.log(food);
        axiosSecure.post('/cart',cartFood)
        .then(data=>{
          if (data.data.insertedId)
            Swal.fire({
                text:  `${cartFoodName} added to cart`,
                icon: 'success',
                
            })
            refetch();
        })
      }

  }

  return (
    <div className="w-full">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper w-full lg:max-w-full md:max-w-screen-md sm:max-w-screen-sm"
      >
        {chunkedMenu.map((menuChunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuChunk.map((food) => (
                <div key={food._id} className="w-full">
                  <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={food.image}
                        alt={food.category}
                        className="w-full"
                      />
                    </figure>
                    <p className="text-white bg-slate-900 absolute right-0 mt-4 mr-4 p-2">
                      ${food.price}
                    </p>
                    <div className="card-body">
                      <h2 className="card-title justify-center">{food.name}</h2>
                      <p>{food.recipe}</p>
                      <div className="card-actions justify-center">
                        <button onClick={()=>{addToCartHandler(food)}} 
                        className="btn btn-ghost border-b-4 border-yellow-600">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurShopCard;
