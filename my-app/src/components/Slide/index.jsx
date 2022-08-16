import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideItem } from './SlideItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

export function Slide() {

    const [banners, setBanners] = useState([])
    
    useEffect( () => {
        fetch('/api/banners')
        .then(resp => resp.json())
        .then( ({ banners }) => setBanners(banners))
    }, []) 
    
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
            {
                banners.map( banner => (
                    <SwiperSlide key={banner.title}>                        
                        <SlideItem img={banner.img} title={banner.title} subTitle={banner.subTitle} slug={banner.slug} />
                    </SwiperSlide>
                ))
            }
        </Swiper>  
    )

}