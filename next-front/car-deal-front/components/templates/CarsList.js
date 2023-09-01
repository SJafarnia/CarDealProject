import CarsListComonent from "../modules/cars/carsList/CarsListComonent"
import Navbar from "@/components/layout/nav/Navbar"

function CarsList({ graphData }) {
    return (
        <>
            <Navbar main="false" />
            <CarsListComonent graphData={graphData} />
        </>
    )
}

export default CarsList