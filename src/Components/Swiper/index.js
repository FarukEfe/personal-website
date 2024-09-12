import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

class Slider extends React.Component {

    get_slides() {
        let items = this.props.item_list;
        let slides = []
        for (let i=0;i<items.length;i++) {
            item = items[i];
            slide = <SwiperSlide>{item}</SwiperSlide>;
            slides.push(slide);
        }

        return slides;
    }

    render() {
        return (
            <Swiper>
                {this.get_slides()}
            </Swiper>
        )
    }
}

export default Slider;