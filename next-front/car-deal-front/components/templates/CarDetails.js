import Breadcrumb from "../modules/cars/car/Breadcrumb"
import Post from "../modules/cars/car/Post"
import PostHeader from "../modules/cars/car/PostHeader"
import { CarDetailContext } from "@/pages/cars/[carId]"
import { useCheckView } from "../utils/customHooks"


export default function CarDetail({ carId }) {
    useCheckView(carId)

    return (
        <div className='xl:w-[1170px] lg:w-[990px] mx-auto px-4 relative pb-20 pt-[80px] sm:pt-[100px] md:pt-[140px] lg:pt-[170px]'>
            <Breadcrumb />
            <CarDetailContext.Consumer>
                {value => value ?
                    <PostHeader brand={value.brand} model={value.model} price={value.price} year={value.year} id={value.id} />
                    : null}
            </CarDetailContext.Consumer>
            <Post />
        </div>
    )
}