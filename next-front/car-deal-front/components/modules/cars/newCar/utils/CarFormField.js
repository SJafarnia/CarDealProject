import Image from "next/image"
import { useEffect } from "react"
import { useState } from "react"

function CarFormField({ id, data, showNext, isFinal, formData, setFormData, value: formValue, type }) {
    const [stepDone, setStepDone] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const stepperClsDone = "relative left-[13px] top-[37px] border-l-2 border-[#8b92f4] border-solid h-[97%] step-bg w-[2px] bg-cover"
    const stepperClsUndone = "relative left-[13px] top-[37px] h-[97%] step-bg w-[2px] bg-cover"

    const inputHandler = (e) => {
        const { name, value } = e.target

        if (value == "") {
            e.target.className += " !border-red-700"
            setInputValue("")
            delete formData[name]
            return setFormData(formData)
        } else {
            e.target.className = "w-full px-3 border-[1px] border-solid border-slate-200 rounded-md"
        }
        if (name == "year" && type == "number") {
            const chars = +value.toString().split('').length
            const val = parseInt(value)
            if (chars > 4) return
            if (chars <= 1 && val > 2) {
                return setInputValue("")
            }
            setInputValue(value)
            return setFormData({ [name]: value })
        }
        type == "number" ? setInputValue(+value) : setInputValue(value)
        type == "number" ? setFormData({ [name]: +value }) : setFormData({ [name]: value })
    }

    const blurHandler = (e) => {
        if (inputValue) {
            setStepDone(true)
            // inserts the next input field
            showNext()
        }
    }
    const keyHandler = (e) => {
        if (e.key === "Tab") {
            e.preventDefault()
        }
        // if (value && e.key === 'Enter' && e.key !== "Tab") {
        //     setStepDone(true)
        //     // inserts the next input field
        //     showNext()
        // }
    }
    return (
        <>
            <div className="flex w-[42px] relative top-[-15px]">
                {stepDone ? <Image alt="tickImage" className="relative top-[-7px]" src="/icons/progress-mark.svg" width={24} height={24}></Image> : <Image alt="tickImage" className="relative top-[-7px]" src="/icons/progress-mark-active.svg" width={24} height={24}></Image>}
                {isFinal ? null : <div className={stepDone ? stepperClsDone : stepperClsUndone}></div>}
            </div>
            <div className="flex flex-col justify-normal">
                <div className="flex items-end mb-2">
                    <label htmlFor={id} className="block text-start uppercase text-md whitespace-normal">
                        {data}
                    </label>
                </div>
                <div className="flex relative">

                    <input type={type} value={formValue || inputValue} onKeyDown={keyHandler} onBlur={blurHandler} onChange={inputHandler} name={id} className="w-full px-3 border-[1px] border-solid border-slate-200 rounded-md"></input>

                </div>
            </div>
        </>
    )
}

export default CarFormField