import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import Icon from '../common/Icons'
import PrimaryButton from '../custom-ui/PrimaryButton'
import ellipse from "../../assets/images/webp/yellow-ellipse.webp";

const Work = () => {
    return (
        <div className='md:py-14 pt-2 pb-7 relative'>
            <div className="container my-1.5 relative z-[1]">
                <div className="flex flex-col lg:flex-row gap-7 items-center justify-between">
                    <div className="max-w-[474px] w-full flex flex-col items-center lg:items-start">
                        <PrimaryHeading className='lg:text-start' text='Let’s work together' yellowText='' />
                        <PrimaryParagraph className='mt-4 text-center lg:text-left' text='Building long term relationships with advertisers and publisher, is at core of our business' />
                        <p data-aos="zoom-in" className='md:mt-10 sm:mt-7 mt-5 text-white text-center lg:text-left font-raleway text-lg sm:text-xl md:text-2xl font-semibold'>Get in touch</p>
                        <PrimaryParagraph className='mt-3 text-center lg:text-left  ' text='Feel free to send us an email or complete the form, we are always happy to answer your questions and meet you.' />
                        <a data-aos="zoom-in" href="mailto:support@datingstars.com" className='text-base group transition_slow hover:text-off-yellow font-normal font-inter text-white flex gap-3 items-center mt-5'>
                            <Icon iconName='emailIcon' hoverClass='group-hover:fill-white' />
                            support@datingstars.com
                        </a>
                    </div>
                    <div data-aos="zoom-in" className="max-w-[565px] sm:min-h-[538px] items-center py-6 px-4 sm:p-6 flex justify-center w-full bg-form-layer bg-no-repeat bg-100">
                        <form method="get" className='flex flex-col items-center lg:items-start max-w-[465px] w-full gap-3 sm:gap-5'>
                            <div className="flex justify-between flex-col sm:flex-row w-full gap-3 sm:gap-5">
                                <input data-aos="zoom-in" type="text" className='sm:max-w-[222px] outline-none border border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white w-full' placeholder='Name' required />
                                <input data-aos="zoom-in" type="text" className='sm:max-w-[222px] outline-none border border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white w-full' placeholder='Last Name*' required />
                            </div>
                            <input data-aos="zoom-in" type="email" className='border w-full outline-none border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white' placeholder='Email*' required />
                            <input data-aos="zoom-in" type="number" className='border w-full outline-none border-off-gray rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white number' placeholder='Phone Number*' required />
                            <textarea data-aos="zoom-in" className='border w-full h-[140px] outline-none border-off-gray rounded-[10px] bg-transparent p-5 font-inter font-normal text-base text-white' placeholder='Your message...'></textarea>
                            <PrimaryButton className='sm:mt-5 mt-3 sm:w-[159px] w-[140px] h-[40px] sm:h-[48px]' hoverClass='bg-white' text='Send Message' />
                        </form>
                    </div>
                </div>
            </div>
            <img src={ellipse} alt="ellipse" className='bottom-16 left-10 absolute pointer-events-none animate-spin animate-duration' />
        </div>
    )
}

export default Work             