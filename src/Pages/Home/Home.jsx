import Swiper from "swiper";
import Slider from "./Slider/Slider";
import OrderOnline from "./OrderOnline/OrderOnline";
import PopularMenu from "./PopularMenu/PopularMenu";


 const Home =()=>{
    return (
        <div>
           <div className="my-10">
           <Slider></Slider>
            </div>
            <div className="my-10">
             <OrderOnline></OrderOnline>
            </div>
            <div className="my-10">
             <PopularMenu></PopularMenu>
            </div>

        </div>
    );
}
export default Home;