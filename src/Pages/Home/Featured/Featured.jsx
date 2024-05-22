import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-bg-img md:h-[848px] bg-fixed ">
            <div className='pt-16'>
                <SectionTitle
                    subHeader='---Check it out---' header='FROM OUR MENU' >
                </SectionTitle>
            </div>
            <div className='py-8 px-16 md:flex justify-center items-center mx-auto gap-16 text-center lg:text-left'>
                <div>
                    <img src={featuredImage} />
                </div>
                <div>
                    <p className='text-xl text-white justify-center'>
                        March 20, 2023 <br />
                        <span className='uppercase font-semibold '>WHERE CAN I GET SOME? </span> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.


                    </p>
                    <button className='btn btn-ghost border-b-white border-b-4 mt-9 text-white'>Read More</button>
                </div>
            </div>


        </div>
    );
};

export default Featured;