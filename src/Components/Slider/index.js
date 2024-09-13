import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import "./styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class SliderTable extends React.Component {

    get_slides() {
        let items = this.props.items;
        let slides = []
        for (let i=0;i<items.length;i++) {
            let item = items[i];
            let slide = <SwiperSlide style={{backgroundColor: `rgb(${i * 50},100,100)`}} className="swiper-item">{item}</SwiperSlide>;
            slides.push(slide);
        }

        return slides;
    }

    render() {
        return (
            <Swiper
            className="swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {this.get_slides()}
          </Swiper>
        )
    }
}

export default SliderTable;