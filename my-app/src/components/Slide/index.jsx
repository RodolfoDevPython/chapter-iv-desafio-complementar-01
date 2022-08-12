import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideItem } from './SlideItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Slide() {

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')} 
        >
            <SwiperSlide>
                <SlideItem img={'/imgs/continent-image.png'} title={'Europa'} subTitle='O continente mais antigo.' />
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem title={'Europa'} subTitle='O continente mais antigo.' />
            </SwiperSlide>
        </Swiper>  
    )

}