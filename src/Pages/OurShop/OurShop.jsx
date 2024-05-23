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
      <div className="my-28 flex justify-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OurShopCard category={category}></OurShopCard>
          </TabPanel>
          <TabPanel>
            <OurShopCard category="pizza"></OurShopCard>
          </TabPanel>
          <TabPanel>
            <OurShopCard category="soup"></OurShopCard>
          </TabPanel>
          <TabPanel>
            <OurShopCard category="dessert"></OurShopCard>
          </TabPanel>
          <TabPanel>
            <OurShopCard category="drinks"></OurShopCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
