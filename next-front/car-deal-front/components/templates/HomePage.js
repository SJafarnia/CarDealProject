import Navbar from '../layout/nav/Navbar'
import Hero from '../modules/home/Hero'
import MainSlider from '../modules/home/MainSliderCotainer'

export default function HomePage() {
    return (
        <>
            <Navbar main="true" />
            <Hero />
            <MainSlider />
        </>
    )
}