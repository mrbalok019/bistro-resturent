import React from 'react';

const MenuItems = ({item}) => {

    const {name,recipe,image,category,price}= item;
    return (
        <div className='flex flex-row gap-8'>
            <img src={image} className='w-[120px] h-[104px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]'/> 
            <div className='flex flex-col gap-2'>
                <div className='flex'>
                    <h1 className='uppercase'>{name} ------ </h1>
                    <p className='text-yellow justify-items-end'>${price} </p>
                </div>
                <p>{recipe} </p>
            </div>
        </div>
    );
};

export default MenuItems;