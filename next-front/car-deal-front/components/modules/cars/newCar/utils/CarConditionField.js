import Image from "next/image"
import { useState } from "react"

function CarConditionField({ id, name, choiceValues, choiceName, showHandler, isFinal, value: formValue, setFormData }) {
    const [stepDone, setStepDone] = useState(false)
    const [value, setValue] = useState("")

    const stepperCls = "relative left-[13px] top-[37px] border-l-2 border-[#8b92f4] border-solid h-[97%] step-bg w-[2px] bg-cover"
    const stepperCls2 = "relative left-[13px] top-[37px] h-[97%] step-bg w-[2px] bg-cover"

    const inputHandler = (e) => {
        const { value, name } = e.target
        setValue(value)
        setFormData({ [name]: value })
        setStepDone(true)
        // inserts the next input field
        showHandler()
    }


    return (
        <>
            <div className="flex w-[42px] relative top-[-15px]">
                {stepDone ? <Image alt="tickImage" className="relative top-[-7px]" src="/icons/progress-mark.svg" width={24} height={24}></Image> : <Image alt="tickImage" className="relative top-[-7px]" src="/icons/progress-mark-active.svg" width={24} height={24}></Image>}
                {isFinal ? null : <div className={stepDone ? stepperCls : stepperCls2}></div>}
            </div>
            <div className="flex flex-col justify-normal">
                <div className="flex items-end mb-2">
                    <label htmlFor={id} className="block text-start uppercase text-md whitespace-normal">
                        {name}
                    </label>
                </div>
                <div className="flex relative font-sans">
                    <select autoFocus name={id} value={value || formValue} onChange={inputHandler} className="s shadow-md border-2 border-solid rounded-md border-form-blue ring-0 hover:border-blue-400 focus:border-theme-blue">
                        <option value={""}>-- انتخاب کنید --</option>
                        {choiceName.map((item, index) => {
                            {/* const key = Object.keys(item)[0] */ }
                            return (
                                <option key={index} value={item}>{choiceValues[index]}</option>
                            )
                        })}
                    </select>

                    {/* <input value={value} onKeyDown={keyHandler} onBlur={blurHandler} onChange={inputHandler} type="text" name={id} className="w-full px-3 border-[1px] border-solid border-slate-200 rounded-md"></input> */}
                </div>
            </div>
        </>
    )
}

export default CarConditionField