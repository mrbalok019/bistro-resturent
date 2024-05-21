import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div>
            <SectionTitle subHeader='---Check it out---' header='FROM OUR MENU'></SectionTitle>
            <div>
                <img src={featuredImage} />
                <div>
                    <p>
                </div>
            </div>
        
        
        </div>
    );
};

export default Featured;