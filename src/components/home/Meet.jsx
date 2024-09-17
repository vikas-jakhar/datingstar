import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MEET_DATA } from '../../utils/Helper'
import Icon from './../common/Icons';

const Meet = () => {
  return (
    <div className='py-12'>
      <div className="container my-1.5">
        <PrimaryHeading text='Meet' yellowText='DatingStars' />
        <PrimaryParagraph className='mt-4 text-center w-fit mx-auto' text='Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis.' />
        <div className="mt-14 pt-1">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
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
                    <p className='text-white text-base font-normal font-inter '>{i.title}</p>
                    <div className='flex items-center justify-between mt-[6px]'>
                      <div className='flex items-center gap-2'>
                        <Icon iconName='calendarIcon' />
                        <p className='text-white text-xs font-normal font-inter'>{i.date}</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Icon iconName='locationIcon' />
                        <p className='text-white text-xs font-normal font-inter'>{i.text} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default Meet