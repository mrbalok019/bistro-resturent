import Swiper from "swiper";
import Slider from "./Slider/Slider";
import OrderOnline from "./OrderOnline/OrderOnline";


 const Home =()=>{
    return (
        <div>
           <div className="my-10">
           <Slider></Slider>
            </div>
            <div className="my-10">
             <OrderOnline></OrderOnline>
            </div>

        </div>
    );
}
export default Home;