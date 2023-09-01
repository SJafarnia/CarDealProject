import Image from "next/image"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const filterMain = (obj) => {
    if (obj) {
        const url = obj.carImage.filter(item => item.isMain == true)[0].url
        return url
    }
}

export default function Gallery({ mainPic, pics, allPics }) {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    // console.log(allPics)
    return (
        <div className="gallery mb-7">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                className="mySwiper2 h-[212px] md:h-[370px] lg:h-[484px] rounded-md"
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {allPics.map((pic) => (
                    <SwiperSlide key={pic.id} className="">
                        <Image src={pic.url} height={4000} width={4000} className="h-[212px] md:h-[370px] lg:h-[484px]" alt="خرید و فروش خودرو" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                wrapperClass=""
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-[80px] mt-5 sm:h-[100px] md:h-[120px]"
            >
                {allPics.map((pic) => (
                    <SwiperSlide key={pic.id} className="h-[80px] sm:h-[100px] md:h-[120px]">
                        <Image src={pic.url} alt={`خودرو ${pic.id}`} height={1080} width={1920} className="object-fill rounded-sm h-[80px] sm:h-[100px] md:h-[120px]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}