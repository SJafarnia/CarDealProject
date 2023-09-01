import Image from "next/image"
import { useEffect } from "react"
import { useState, useRef } from "react"

function CarFormField({ id, data, showNext, isFinal, setFormData, value: formValue }) {

    const [stepDone, setStepDone] = useState(false)
    const [value, setValue] = useState("")
    const ready = useRef(false)

    const stepperClsDone = "relative left-[13px] top-[37px] border-l-2 border-[#8b92f4] border-solid h-[97%] step-bg w-[2px] bg-cover"
    const stepperClsUndone = "relative left-[13px] top-[37px] h-[97%] step-bg w-[2px] bg-cover"

    const inputHandler = (e) => {
        const { name, value } = e.target
        if (value == ""){
            console.log(e.target.className)
            // let cls = e.target.className
            e.target.className += " !border-red-700" 
        }else{
            e.target.className = "w-full px-3 border-[1px] border-solid border-slate-200 rounded-md"
        }
        setValue(value)
        setFormData({ [name]: value })
        // if (value && value.length <= 1 && value !== 0 && ready.current == false) { ready.current = true, console.log(ready) }
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
                    <input value={formValue || value} onKeyDown={keyHandler} onBlur={blurHandler} onChange={inputHandler} type="text" name={id} className="w-full px-3 border-[1px] border-solid border-slate-200 rounded-md"></input>
                </div>
            </div>
        </>
    )
}

export default CarFormField