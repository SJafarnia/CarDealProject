import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';

const filterMain = (obj) => {
    if (obj) {
        const url = obj.carImage.filter(item => item.isMain == true)[0]?.url
        return url
    } else
        return undefined
}

export default function CarSlider(props) {
    return (
        <>
            <li key={props.id} className="sldr rounded-lg animate-fade-in opacity-5 transition-all h-full">
                <Link href={`/cars/${props.id}`} className='h-full'>
                    <div className="listitem px-[15px] h-full">
                        <article className="relative h-full">
                            <div className="thumbnailwrapper relative">
                                <div className="imagethumbnail h-[200px] md:h-[340px] lg:h-[200px] rounded-t-lg listing-item block">
                                    <Image src={filterMain(props)} alt="" loading="lazy" className="rounded-t-lg listing-image w-full h-full object-cover" height={1080} width={1920} />
                                </div>
                                {/* <div className="label absolute left-5 top-5 z-10">
                                    <span className="bg-[#D0473A] text-white inline-block text-xs font-semibold py-1 px-3 rounded-3xl">Featured</span>
                                </div> */}
                                <div className="bottomlabel"></div>
                            </div>
                            <div className="iteminfo rounded-b-lg py-[17px] px-5 border-[#EAEAEA] border-t-0 border-b border-solid bg-white" dir="ltr">
                                <h2 className="text-sm text-center mb-2 font-semibold whitespace-nowrap overflow-hidden">{props.brand} {props.model} - {props.year}</h2>
                                <div className="flex items-center flex-col md:justify-normal xs:justify-between" dir="ltr">
                                    <div className="listingpricd flex p-2 my-2 xs:text-sm text-[#4AAEE7] md:text-base">
                                        <span className='text-xs'>$</span>
                                        <span className='text-xs'>{props.price}</span>
                                    </div>
                                    <div dir='rtl' className="inforight text-xs">
                                        <div className="flex text-xs sm:text-sm justify-between">
                                            <div className="road sm:ml-[2px] flex items-center">
                                                <div className="icon sm:ml-[2px]"><Image className="w-full p-1" src="/icons/indicators/road-perspective.png" alt="" width={16} height={16} /></div>
                                                <span className='text-xs whitespace-nowrap overflow-hidden'>{props.usage}</span>
                                            </div>
                                            <div className="fuel_type sm:ml-[2px] flex items-center">
                                                <div className="sm:ml-[2px]"><Image className="w-full p-1" src="/icons/indicators/gas-station.png" alt="" width={16} height={16} /></div>
                                                <span className='text-xs whitespace-nowrap overflow-hidden'>{props.fuel}</span>
                                            </div>
                                            <div className="transmission sm:ml-[2px] flex items-center">
                                                <div className="sm:ml-[2px]"><Image className="w-full p-1" src="/icons/indicators/manual-transmission.png" alt="" width={16} height={16} /></div>
                                                <span className='text-xs whitespace-nowrap overflow-hidden'>{props.transmission}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </Link>
            </li>


            <Script
                src="/scripts/slider.js"
                strategy="lazyOnload"
                onLoad={() => { return }// console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </>
    )
}