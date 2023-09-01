import Image from 'next/image'
import DropdownContainer from './DropdownContainer'
import PriceSlider from './utils/PriceSlider'
import Link from 'next/link'
import HeroItem from './HeroItem'


function Hero() {
    return (
        <section className="main-bg h-[1000px] bg-no-repeat bg-top-center w-full bg-[#eff3f6] lg:mb-[0px]">
            <div className="">
                <div className="pt-[300px] pb-[20px] md:pb-[210px] lg:pb-[300px]">
                    <div className="container text-white mx-auto lg:max-w-5xl md:max-w-2xl xs:max-w-md">
                        <div className="flex w-full justify-center flex-col text-center">
                            <div className="heroheader mb-5  text-[2rem] font-[500]">
                                <h1>کمتر بگرد، بیشتر ببین</h1>
                            </div>
                            <div className="herosubt mb-5 mt-2 text-sm">
                                <span>پیدا کردن خودرو به آسانی یک کلیک</span>
                            </div>
                            {/* <div className="heromenu mt-5 m-5 md:m-1">
                                <div className="p-4 bg-white rounded-lg ">
                                    <form action="POST">
                                        <section className="inner relative">
                                            <div className="flex justify-between lg:flex-row flex-col items-center -ml-2 -mr-2">
                                                <DropdownContainer />
                                                <PriceSlider />
                                            </div>
                                        </section>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="lg:max-w-3xl sm:max-w-2xl m-auto">
                        <div className="flex p-4 lg:-mt-[140px] md:-mt-[210px] sm:-mt-[40px] justify-evenly flex-wrap">
                            <HeroItem
                                href="/cars"
                                img="/icons/carimages/coupe-car.png"
                                title="کوپه"
                                alt="coupe خودرو کوپه"
                            />
                            <HeroItem
                                href="/cars"
                                img="/icons/carimages/convertible-car.png"
                                title="کروک"
                                alt="convertible خودرو کروک"
                            />
                            <HeroItem
                                href="/cars"
                                img="/icons/carimages/jeep.png"
                                title="SUV"
                                alt="خودرو شاسی بلند suv"
                            />
                            <HeroItem
                                href="/cars"
                                img="/icons/carimages/sedan-car-model.png"
                                title="سدان"
                                alt="sedan خودرو سواری سدان"
                            />
                            <HeroItem
                                href="/cars"
                                img="/icons/carimages/car-black-side-view-pointing-left (2).png"
                                title="نیم شاسی"
                                alt="sedan خودرو سواری سدان"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
export default Hero