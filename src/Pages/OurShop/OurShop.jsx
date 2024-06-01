import React, { useEffect, useState } from "react";
import CoverImage from "../../Component/CoverImage/CoverImage";
import banner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurShopCard from "./OurShopCard";
import { useParams } from "react-router";

const OurShop = () => {
     const {category}=useParams();
     const categoryArray = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks'];
     const initalIndex = categoryArray.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initalIndex);
   console.log(initalIndex);
 
  

  return (
    <div>
      <div>
        <CoverImage
          image={banner}
          header="OUR SHOP"
          subHeader="Would you like to try a dish?"
        />
      </div>
      <div className="my-28 flex justify-center lg:max-w-full md:max-w-screen-md sm:max-w-screen-sm ">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="w-full">
          <TabList className='flex justify-center text-2xl text-yellow-700 gap-6'>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel className='mt-6'>
            <OurShopCard category="salad"></OurShopCard>
          </TabPanel>
          <TabPanel className='mt-6'>
            <OurShopCard category="pizza"></OurShopCard>
          </TabPanel>
          <TabPanel className='mt-6'>
            <OurShopCard category="soup"></OurShopCard>
          </TabPanel>
          <TabPanel className='mt-6'>
            <OurShopCard category="dessert"></OurShopCard>
          </TabPanel>
          <TabPanel className='mt-6'>
            <OurShopCard category="drinks"></OurShopCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
