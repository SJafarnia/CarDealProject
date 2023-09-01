import Gallery from "./postComponents/Gallery"
import PostDetails from "./postComponents/PostDetails"
import PostInfo from "./postComponents/PostInfo"
import { CarDetailContext } from "@/pages/cars/[carId]"
import PreLoader from "./PreLoader"

export default function Post() {
    return (
        <div className="details mt-[70px]">
            <div className="row flex xs:flex-col lg:flex-row">
                <div className="r-section w-full lg:w-2/3">
                    <CarDetailContext.Consumer>
                        {value => value ?
                            <>
                                <Gallery
                                    allPics={value.carImage}
                                    mainPic={value.carImage?.filter(item => item.isMain == true)[0]?.url}
                                    pics={value.carImage?.filter(item => item.isMain == false)}
                                />
                                <PostDetails desc={value.description} />
                            </>
                            :
                            null
                        }
                    </CarDetailContext.Consumer>
                </div>
                <div className="l-section lg:w-1/3 relative min-h-[1px] px-[15px]">
                    <CarDetailContext.Consumer>
                        {value =>
                            value ?
                                <PostInfo brand={value.brand} price={value.price} year={value.year} usage={value.usage} fuel={value.fuel} model={value.model} transmission={value.transmission} color={value.color} seller={value.seller} />
                                : null
                        }
                    </CarDetailContext.Consumer>

                </div>
            </div>
        </div>
    )
}