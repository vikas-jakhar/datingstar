import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import { MEET_DATA } from '../../utils/Helper';
import Icon from './../common/Icons';
import PrimaryButton from '../custom-ui/PrimaryButton';
import star from "../../assets/images/webp/yellow-star.webp";

const Meet = () => {
  return (
    <div className='py-12 relative'>
      <div className="container my-1.5 relative z-[1]">
        <PrimaryHeading text='Meet' yellowText='DatingStars' />
        <PrimaryParagraph className='mt-4 pb-1 text-center w-fit mx-auto' text='Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis.' />
        <div className="mt-14 relative meet">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {MEET_DATA.map((i, idx) => (
              <SwiperSlide key={idx}>
                <div className='flex overflow-hidden bg-white relative max-w-[364px] w-full rounded-[22px] group'>
                  <img src={i.img} alt="tower" className='w-full transition_slow group-hover:scale-110' />
                  <div className='p-2.5 absolute bottom-[21px] left-1/2 -translate-x-1/2 border rounded-md w-11/12 xl:w-full max-w-[309px] min-h-[75px] backdrop-blur-sm bg-[#0000001A]'>
                    <p className='text-white text-base font-normal font-inter'>{i.title}</p>
                    <div className='flex items-center justify-between mt-[6px]'>
                      <div className='flex items-center gap-2'>
                        <Icon iconName='calendarIcon' />
                        <p className='text-white text-xs font-normal font-inter'>{i.date}</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Icon iconName='locationIcon' />
                        <p className='text-white text-xs font-normal font-inter'>{i.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev group transition_slow hover:bg-white rounded-full w-[34px] h-[34px] cursor-pointer absolute top-[50%] left-0 -translate-y-1/2 z-10">
            <div className="flex rounded-full w-[34px] h-[34px] justify-center items-center">
              <Icon hoverClass='group-hover:fill-black transition_slow' iconName="leftArrow" />
            </div>
          </div>
          <div className="swiper-button-next group transition_slow hover:bg-white rounded-full cursor-pointer absolute top-[50%] right-0 -translate-y-1/2 z-10">
            <div className="flex rounded-full w-[34px] h-[34px] justify-center items-center">
              <Icon className='rotate-180' hoverClass='group-hover:fill-black transition_slow' iconName="leftArrow" />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:pb-11 mb-0.5">
          <PrimaryButton hoverClass='group-hover:bg-white' className='w-[288px] h-[48px] mt-[60px]' text='Book A Meeting With Our Team!' />
        </div>
      </div>
      <img src={star} alt="star" className='bottom-24 right-0 absolute pointer-events-none' />
    </div>
  );
}

export default Meet;