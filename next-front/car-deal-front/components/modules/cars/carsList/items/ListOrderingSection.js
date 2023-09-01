import OrderingComponent from './utils/OrderingComponent'
import { CarsListContext } from "@/pages/cars"

const items = [
    { name: "جدید ترین", value: "newest" },
    { name: "قدیمی ترین", value: "oldest" },
    { name: "ارزان ترین", value: "lowest" },
    { name: "گران ترین", value: "highest" },
]

function ListOrdering({ ordering, setOrdering }) {
    const filterHandler = (val) => {
        setOrdering(val)
    }

    return (
        <div className="mb-6 lg:mb-8 md:flex md:justify-center md:items-center" >
            <div className="ordering flex items-center">
                <form className='flex justify-center items-center'>
                    <div className="text-s text-sm align-middle ml-2">
                        نمایش به ترتیب:
                    </div>
                    <div className='w-min'>
                        <OrderingComponent ordering={ordering} setter={filterHandler} items={items} />
                    </div>
                </form>
            </div>
            <div className="results mt-2 md:mt-0 font-thin text-sm md:mr-auto">
                {/* {" نمایش "}
                        <span className="fisrt">1</span>
                        {" - "}
                        <span className="last">12</span>
                        {` از ${value.length} نتیجه `} */}
            </div>
        </div>
    )
}

export default ListOrdering