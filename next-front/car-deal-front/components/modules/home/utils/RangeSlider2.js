const useSlider = (min, max, defaultState, label, id) => {
    const [state, setSlide] = useState(defaultState);
    const handleChange = e => {
        // console.log('setting level', e.target.value)
        setSlide(e.target.value);
    }

    const props = {
        type: 'range',
        id,
        min,
        max,
        step: 0.5,
        value: state,
        onChange: handleChange
    }
    return props
}

const App = () => {
    const sliderProps = useSlider(1, 100, 70, "Threshold", 'threshold');
    return (
        <div>
            <input {...sliderProps} />
        </div>
    )
};