import React from 'react';
import CoverImage from '../../../Component/CoverImage/CoverImage';
import banner from '../../../assets/shop/banner2.jpg'
const OurShop = () => {
    return (
        <div>
            <div>
                <CoverImage 
                image={banner}
                header="OUR SHOP"
                subHeader="Would you like to try a dish?"
                />
            </div>
            <div className='my-28'>

            </div>
        </div>
    );
};

export default OurShop;