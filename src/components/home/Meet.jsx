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
    <div className='sm:py-12 py-10 relative'>
      <div className="container md:my-1.5 relative z-[1]">
        <PrimaryHeading text='Meet' yellowText='DatingStars' />
        <PrimaryParagraph className='md:mt-4 sm:mt-3 mt-2 pb-1 text-center w-fit mx-auto' text='Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis.' />
        <div className="md:mt-14 sm:mt-8 mt-5 relative meet">
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
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {MEET_DATA.map((i, idx) => (
              <SwiperSlide key={idx}>
                <div data-aos="zoom-in" className='flex overflow-hidden relative max-w-[364px] w-full rounded-[22px] group'>
                  <img src={i.img} alt="tower" className='w-full transition_slow group-hover:scale-110' />
                  <div className='sm:p-2.5 p-1.5 absolute bottom-[21px] left-1/2 -translate-x-1/2 border rounded-md w-11/12 xl:w-full max-w-[309px] sm:min-h-[75px] backdrop-blur-sm bg-[#0000001A]'>
                    <p data-aos="zoom-in" className='text-white text-sm sm:text-base font-normal font-inter'>{i.title}</p>
                    <div className='flex items-center justify-between mt-[6px]'>
                      <div data-aos="zoom-in" className='flex items-center gap-2'>
                        <Icon iconName='calendarIcon' />
                        <p className='text-white text-xs font-normal font-inter'>{i.date}</p>
                      </div>
                      <div data-aos="zoom-in" className='flex items-center gap-2'>
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
        <div className="flex justify-center lg:pb-11 lg:mb-0.5" data-aos="zoom-in">
          <PrimaryButton hoverClass='group-hover:bg-white' className='sm:w-[288px] w-[250px] h-10 md:h-12 sm:mt-12 mt-8 md:mt-[60px]' text='Book A Meeting With Our Team!' />
        </div>
      </div>
      <img src={star} alt="star" className='bottom-24 right-0 absolute pointer-events-none animate-spin animate-duration' />
    </div>
  );
}

export default Meet;