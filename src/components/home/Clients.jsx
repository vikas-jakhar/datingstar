import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import Icon from './../common/Icons';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import jaydon from "../../assets/images/svg/jaydon.svg";
import bator from "../../assets/images/svg/bator.svg";
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import comma from "../../assets/images/webp/comma.webp";

const Clients = () => {
    return (
        <div className='lg:py-24 md:py-16 py-10'>
            <div className="container mb-28 pb-1">
                <PrimaryHeading text="Here’s what our" yellowText="clients say" />
                <PrimaryHeading text="about us...." yellowText="" />
                <div className="mt-14 pt-1 relative clients">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={2}
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
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                        }}
                    >
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="flex flex-col backdrop-blur-sm bg-off-white items-center p-5 max-w-[558px] border border-dark-gray rounded-[22px] relative">
                                    <img src={idx === 0 || idx === 2 || idx === 4 ? jaydon : bator} alt="client" />
                                    <Icon className="my-4" iconName="starIcon" />
                                    <PrimaryParagraph className="text-center max-w-[515px]" text="Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis. Ac in sem mi ipsum urna. Sed feugiat semper nulla amet sit in sed interdum proin. Molestie volutpat fermentum amet tempor in nulla elit viverra sed." />
                                    <p className="font-raleway font-semibold text-2xl mt-4 text-off-yellow">Jaydon Bator</p>
                                    <PrimaryParagraph text="Sr. Designer" />
                                    <img src={comma} alt="comma" className="absolute -left-3 -bottom-3" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev group transition_slow hover:bg-white rounded-full cursor-pointer absolute -bottom-24 top-auto z-10">
                        <div className="flex rounded-full w-[34px] h-[34px] justify-center items-center">
                            <Icon hoverClass='group-hover:fill-black transition_slow' iconName="leftArrow" />
                        </div>
                    </div>
                    <div className="swiper-button-next group transition_slow hover:bg-white rounded-full cursor-pointer absolute -bottom-24 top-auto z-10">
                        <div className="flex rounded-full w-[34px] h-[34px] justify-center items-center">
                            <Icon hoverClass='group-hover:fill-black transition_slow' className='rotate-180' iconName="leftArrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;