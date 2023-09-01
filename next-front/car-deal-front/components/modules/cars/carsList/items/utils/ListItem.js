import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, forwardRef } from 'react'
import { useInView } from "react-intersection-observer"

const filterMain = (obj) => {
    if (obj) {
        const url = obj.carImage?.filter(item => item.isMain == true)[0]?.url
        return url
    } else
        return undefined
}

const ListItem = (props) => {

    return (
        <div ref={props.forwardedRef || null} className="animate-fade-in opacity-5 transition-all">
            <Link href={`/cars/${props.id}`}>
                <div className="listitem lg:px-[15px]">
                    <article className="relative">
                        <div className="thumbnailwrapper relative">
                            <div className="imagethumbnail bg-white p-[10px] md:h-[300px] lg:h-[200px] rounded-t-lg listing-item block">
                                <Image src={filterMain(props)} alt="" loading="lazy" height={1080} width={1980} className="border-solid border-0 border-white rounded-lg listing-image w-full h-[160px] sm:h-[190px] md:h-full lg:h-[180px] object-cover" />
                            </div>
                            <div className="label absolute left-5 top-5 z-10">
                                <span className="bg-[#D0473A] text-white inline-block text-xs font-semibold py-1 px-3 rounded-3xl">Featured</span>
                            </div>
                            <div className="bottomlabel"></div>
                        </div>
                        <div className="iteminfo mt-2 rounded-b-lg py-[13px] px-5 border-[#EAEAEA] bg-white" dir="rtl">
                            <div className="flex flex-col md:justify-normal xs:justify-between">
                                <div className="listingpricd flex mb-1 font-semibold xs:text-sm md:text-[15px]">
                                    <span>{props.price}</span>
                                    <span className='flex items-center mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className='flex px-2 py-2 items-center mt-3 justify-between pl-4'>
                                    <h2 className="text-sm font-semibold inline whitespace-nowrap overflow-hidden ml-2">
                                        {props.brand}&nbsp; {props.model}</h2>
                                    {/* &nbsp;&nbsp;&nbsp;–&nbsp;&nbsp; */}
                                    <h2 className="text-sm font-semibold inline">{props.year}</h2>
                                </div>
                                <div dir='rtl' className="inforight p-2 text-xs border-t-[1px] border-solid border-[#EAEAEA] pt-5 mt-2">
                                    <div className="flex justify-between px-4 py-2 md:justify-center ">
                                        <div className="road ml-[10px] flex items-center">
                                            <div className="icon ml-[8px]"><Image className="" src="/icons/indicators/road-perspective.png" alt="" width={16} height={16} /></div>
                                            <span>{props.usage}</span>
                                        </div>

                                        <div className="fuel_type ml-[10px] flex items-center">
                                            <div className="ml-[8px] "><Image className="" src="/icons/indicators/gas-station.png" alt="" width={16} height={16} /></div>
                                            <span>{props.fuel}</span>
                                        </div>
                                        <div className="transmission ml-[10px] flex items-center    ">
                                            <div className="ml-[8px] "><Image className="" src="/icons/indicators/manual-transmission.png" alt="" width={16} height={16} /></div>
                                            <span>{props.transmission}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </Link>
        </div>
    )
}
export default ListItem