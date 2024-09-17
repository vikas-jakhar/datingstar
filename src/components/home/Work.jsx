import React from 'react'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import Icon from '../common/Icons'
import PrimaryButton from '../custom-ui/PrimaryButton'
import ellipse from "../../assets/images/webp/yellow-ellipse.webp";

const Work = () => {
    return (
        <div className='sm:py-14 py-7 relative'>
            <div className="container my-1.5 relative z-[1]">
                <div className="flex flex-col lg:flex-row gap-7 items-center justify-between">
                    <div className="max-w-[474px] w-full flex flex-col items-center lg:items-start">
                        <PrimaryHeading className='lg:text-start' text='Let’s work together' yellowText='' />
                        <PrimaryParagraph className='mt-4 text-center lg:text-left' text='Building long term relationships with advertisers and publisher, is at core of our business' />
                        <p className='mt-10 text-white text-center lg:text-left font-raleway text-2xl font-semibold'>Get in touch</p>
                        <PrimaryParagraph className='mt-3 text-center lg:text-left  ' text='Feel free to send us an email or complete the form, we are always happy to answer your questions and meet you.' />
                        <a href="mailto:support@datingstars.com" className='text-base group transition_slow hover:text-off-yellow font-normal font-inter text-white flex gap-3 items-center mt-5'>
                            <Icon iconName='emailIcon' hoverClass='group-hover:fill-white' />
                            support@datingstars.com
                        </a>
                    </div>
                    <div className="max-w-[565px] min-h-[538px] items-center p-6 flex justify-center w-full bg-form-layer bg-no-repeat bg-100">
                        <form method="get" className='flex flex-col items-center lg:items-start max-w-[465px] w-full gap-5'>
                            <div className="flex justify-between flex-col sm:flex-row w-full gap-5">
                                <input type="text" className='sm:max-w-[222px] outline-none border border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white w-full' placeholder='Name' required />
                                <input type="text" className='sm:max-w-[222px] outline-none border border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white w-full' placeholder='Last Name*' required />
                            </div>
                            <input type="email" className='border w-full outline-none border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white' placeholder='Email*' required />
                            <input type="number" className='border w-full outline-none border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white number' placeholder='Phone Number*' required />
                            <textarea className='border w-full h-[140px] outline-none border-off-gray rounded-[10px] bg-transparent p-5 font-inter font-normal text-base text-white' placeholder='Your message...'></textarea>
                            <PrimaryButton className='mt-5 w-[159px] h-[48px]' hoverClass='bg-white' text='Send Message' />
                        </form>
                    </div>
                </div>
            </div>
            <img src={ellipse} alt="ellipse" className='bottom-16 left-10 absolute' />
        </div>
    )
}

export default Work             