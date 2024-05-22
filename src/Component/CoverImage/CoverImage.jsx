import React from 'react';

const CoverImage = ({image,header,subHeader}) => {
    return (
        <div>
            <div className="hero h-[700px]" style={{ backgroundImage: `url('${image}')` }}>
                <div className="hero-overlay h-3/4 w-3/4 bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">{header} </h1>
                        <p className="mb-5">{subHeader} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverImage;