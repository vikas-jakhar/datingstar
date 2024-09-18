import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import Icon from '../common/Icons';
import { ANALYTICS_DATA } from '../../utils/Helper';
import star from "../../assets/images/webp/star.webp";
import ellipse from "../../assets/images/webp/ellipse.webp";
import { Tilt } from 'react-tilt';

const Analytics = () => {
    const tiltOptions = {
        max: 55,
        scale: 1,
        speed: 700,
        glare: true,
        "max-glare": 0.3,
    };

    return (
        <div className='lg:py-24 py-10 relative'>
            <div className="container xl:pt-24 mt-1 relative z-[1]">
                <PrimaryHeading text='Why' yellowText='DatingStars?' />
                <PrimaryParagraph className='md:mt-5 sm:mt-3 mt-2 text-center max-w-[759px] mx-auto' text='DatingStars has been founded in 2023, but our management team has 10 years+ experience in the casual dating vertical and has developed the best products available in the market.' />
                <div className="md:pt-9 sm:pt-5 mt-3 flex flex-wrap -mx-3 justify-center flex-row">
                    {ANALYTICS_DATA.map((i, index) => (
                        <Tilt key={index} className='lg:w-4/12 sm:w-6/12 justify-center' options={tiltOptions}>
                            <div data-aos="zoom-in" className="w-full justify-center flex xl:px-3 px-2 mt-4 xl:mt-6">
                                <div className="rounded-[22px] group border border-light-gray max-w-[364px] sm:max-w-full sm:min-h-[250px] lg:min-h-[248px] hover:border-off-yellow transition_slow bg-off-white w-full h-full p-5 transform transition-transform duration-500 ease-in-out hover:scale-[1.05] shadow-lg hover:shadow-2xl">
                                    <Icon iconName={i.icon} className='w-[60px] h-[60px] rounded-full bg-light-white justify-center transition_slow items-center group-hover:bg-off-yellow' hoverClass='group-hover:fill-black' />
                                    <p className='sm:mt-6 mt-4 text-white font-semibold font-raleway sm:text-xl text-lg md:text-2xl'>{i.title}</p>
                                    <PrimaryParagraph className='sm:mt-4 mt-2' text={i.text} />
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
            <img src={star} alt="star" className='absolute top-5 right-0 pointer-events-none animate-spin animate-duration' />
            <img src={ellipse} alt="ellipse" className='absolute bottom-0 left-14 pointer-events-none animate-spin animate-duration' />
        </div>
    )
}

export default Analytics;