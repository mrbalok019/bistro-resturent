import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    return (
        <div>
            <SectionTitle
                subHeader='---What Our Clients Say---'
                header='TESTIMONIALS'
            />
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper lg:max-w-full md:max-w-screen-md sm:max-w-screen-sm 
                    rounded-xl"
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col justify-center items-center px-16">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className=" w-12 h-20 my-14"/>
                                    <p className="text-xl">{review.details} </p>
                                    <p className="text-3xl text-yellow-500 font-medium">{review.name } </p>
                                </div>

                            </SwiperSlide>

                        )
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;