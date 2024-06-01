import Swiper from "swiper";
import Slider from "./Slider/Slider";
import OrderOnline from "./OrderOnline/OrderOnline";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimonial/Testimonial";


 const Home =()=>{
    return (
        <div>
           <div className="mb-10">
           <Slider></Slider>
            </div>
            <div className="my-10">
             <OrderOnline></OrderOnline>
            </div>
            <div className="my-10">
             <PopularMenu></PopularMenu>
            </div>
            <div className="my-10">
             <Featured></Featured>
            </div>
            <div className="my-10">
             <Testimonial></Testimonial>
            </div>

        </div>
    );
}
export default Home;