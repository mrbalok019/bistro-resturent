import React, { useEffect, useState } from 'react';
import MenuItems from '../MenuItems/MenuItems';

const MenuCategory = ({category,buttonText}) => {
    const [menu,setMenu] = useState([]);

    useEffect( ()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data=>{
            const categoryItems = data.filter(item=> item.category === category)
            setMenu(categoryItems);
        })
    } ,[])
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menu.map(item=><MenuItems
                key={item._id}
                item={item}
                ></MenuItems>
                    
                )
                
                }


            </section>
                <div className=" flex justify-center">
                   <button className='btn btn-ghost border-b-black border-b-4 my-12'>{buttonText} </button>
                </div>

        </div>
    );
};

export default MenuCategory;