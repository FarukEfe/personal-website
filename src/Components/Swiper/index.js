import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

class Slider extends React.Component {

    get_slides() {
        let items = this.props.items;
        let slides = []
        for (let i=0;i<items.length;i++) {
            let item = items[i];
            let slide = <SwiperSlide>{item}</SwiperSlide>;
            slides.push(slide);
        }

        return slides;
    }

    render() {
        return (
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {this.get_slides()}
            </Swiper>
        )
    }
}

export default Slider;