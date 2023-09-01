import { useState } from "react"
import App from "../RangeSliderApp"

export default function PriceSlider() {
    const [value, setValue] = useState(180)

    const inputHandler = (event) => {
        setValue(() => { event.target.value })
    }

    return (
        <div className="xs:w-full price-slider w-1/5 p-2 ml-6 flex-grow">
            <label htmlFor="medium-range" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">رنج قیمت</label>
            {/* <input dir="ltr" id="medium-range" min="0" max="200" type="range" value={value} onMouseUp={inputHandler} className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
            <App />

        </div>
    )
}