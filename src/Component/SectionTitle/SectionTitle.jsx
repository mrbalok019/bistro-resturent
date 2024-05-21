import React from 'react';

const SectionTitle = ({subHeader,header}) => {
    return (
        <div className="flex flex-col mx-auto text-center mb-10">
            <h1 className="text-xl text-[#D99904] my-4"><i> {subHeader} </i></h1>
            <hr className="w-3/4 h-1 bg-[#E8E8E8] mx-auto"></hr>
            <h1 className="text-5xl text-black my-5">{header} </h1>
            <hr className="w-3/4 h-1 bg-[#E8E8E8] mx-auto"></hr>
        </div>
    );
};

export default SectionTitle;