import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Icon from '../common/Icons'
import { ANALYTICS_DATA } from '../../utils/Helper'

const Analytics = () => {
    return (
        <div className='lg:py-24 py-10 sm:py-16 relative'>
            <div className="container xl:pt-24 mt-1">
                <PrimaryHeading text='Why' yellowText='DatingStars?' />
                <PrimaryParagraph className='mt-5 text-center max-w-[759px] mx-auto' text='DatingStars has been founded in 2023, but our management team has 10 years+ experience in the casual dating vertical and has developed the best products available in the market.' />
                <div className="pt-9 flex flex-wrap -mx-3 flex-row">
                    {ANALYTICS_DATA.map((i, index) => (
                        <div key={index} className="lg:w-4/12 sm:w-6/12 w-full justify-center flex xl:px-3 px-2 mt-4 xl:mt-6">
                            <div className="rounded-[22px] group border border-light-gray max-w-[364px] sm:max-w-full min-h-[248px] hover:border-off-yellow transition_slow bg-off-white w-full h-full p-5">
                                <Icon iconName={i.icon} className='w-[60px] h-[60px] rounded-full bg-light-white justify-center transition_slow items-center group-hover:bg-off-yellow' hoverClass='group-hover:fill-black' />
                                <p className='mt-6 text-white font-semibold font-raleway text-2xl'>{i.title}</p>
                                <PrimaryParagraph className='mt-4' text={i.text} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Analytics