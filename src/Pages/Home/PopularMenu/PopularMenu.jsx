import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItems from "../../../Component/MenuItems/MenuItems";

const PopularMenu = () => {

    const [menu,setMenu] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/menu')
        .then(res =>res.json())
        .then(data=>{
            const popularItems = data.filter(item=> item.category === 'popular')
            setMenu(popularItems);
        })
    } ,[])

    return (
        <div>
            <SectionTitle subHeader= '---Check it out---' header='FROM OUR MENU'></SectionTitle>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menu.map(item=><MenuItems
                key={item._id}
                item={item}
                ></MenuItems>
                    
                )
                
                }


            </section>
                <div className=" flex justify-center">
                   <button className='btn btn-ghost border-b-black border-b-4 my-12'>View Full Menu</button>
                </div>

        </div>
    );
};

export default PopularMenu;