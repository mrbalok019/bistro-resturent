import CoverImage from "../../Component/CoverImage/CoverImage";
import MenuCategory from "../../Component/MenuCategory/MenuCategory";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import menuBanner from "../../assets/menu/banner3.jpg"
const Menu = () => {
    return (
        <div>
            <div>
                <CoverImage
                    image={menuBanner}
                    header='OUR MENU'
                    subHeader='Would you like to try a dish?'
                ></CoverImage>
            </div>
            <div className="my-24">
                <SectionTitle
                    subHeader="---Don't miss---"
                    header="TODAY'S OFFER"
                />
                <MenuCategory
                    category="offered"
                    buttonText="ORDER YOUR FAVOURATE FOOD"
                />

            </div>
            <div className="mt-12 mb-28">
                <CoverImage
                    image={menuBanner}
                    header='DESSERTS'
                    subHeader='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                ></CoverImage>
            </div>
            <div className="my-24">
              
                <MenuCategory
                    category="dessert"
                    buttonText="ORDER YOUR FAVOURATE FOOD"
                />
            </div>
            <div className="mt-12 mb-28">
                <CoverImage
                    image={menuBanner}
                    header='PIZZA'
                    subHeader='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                ></CoverImage>
            </div>
            <div className="my-24">
               
                <MenuCategory
                    category="pizza"
                    buttonText="ORDER YOUR FAVOURATE FOOD"
                />
            </div>
            <div className="mt-12 mb-28">
                <CoverImage
                    image={menuBanner}
                    header='SALADS'
                    subHeader='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                ></CoverImage>
            </div>
            <div className="my-24">
               
                <MenuCategory
                    category="salad"
                    buttonText="ORDER YOUR FAVOURATE FOOD"
                />
            </div>
            <div className="mt-12 mb-28">
                <CoverImage
                    image={menuBanner}
                    header='SOUPS'
                    subHeader='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                ></CoverImage>
            </div>
            <div>
               
                <MenuCategory
                    category="soup"
                    buttonText="ORDER YOUR FAVOURATE FOOD"
                />


            </div>

        </div>
    );
};

export default Menu;