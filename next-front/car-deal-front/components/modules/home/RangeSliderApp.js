import { useCallback, useState, useMemo } from "react"
import RangeSlider from "./utils/RangeSlider";


function App() {
    // const sliderProps = useSlider(0, 200, 180, "PriceSlider", 'medium-range');
    const [parentVal, setParentVal] = useState(180);

    const valueChanged = useCallback((val) => {
        setParentVal(val)
    });

    const sliderProps = useMemo(
        () => ({
            min: 0,
            max: 200,
            type: "range",
            id: 'medium-range',
            value: parentVal,
            label: "PriceSlider",
            onChange: function (e) { valueChanged(e) }
        }),

    );
    return (
        <>
            <RangeSlider {...sliderProps} dir="ltr" className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <output className="w-full block text-black">{sliderProps.value}</output>
        </>
    )
};

export default App