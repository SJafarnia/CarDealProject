import { useEffect, useState } from "react"

export default function AuthInput({ type, autoc, placeholder, name, change, pattern, errs, id }) {

    const [errMsg, setErrMsg] = useState([])

    let inputClassName = "w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200 focus:ring-0 focus:shadow-none focus:border-gray-400 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"

    useEffect(() => {
        if (errs) {
            // console.log("have errs", errs)
            for (const key in errs) {
                if (errs.hasOwnProperty(key)) {
                    if (key === name) {
                        const msgs = errs[key]
                        setErrMsg(msgs)
                        // console.log(msgs[0].message)
                    }
                }
            }
        }
    }, [errs])

    const classHandler = () => {
        inputClassName = "w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 focus:ring-0 focus:shadow-none focus:border-gray-400"
    }

    return (
        <div className="mb-6">
            <input id={id} dir="rtl" type={type} autoComplete={autoc} placeholder={placeholder} name={name}
                onChange={change} onFocus={() => { setErrMsg(null) }} className={inputClassName} pattern={pattern} />
            {/* <label
                htmlFor={id}
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >{name}
            </label> */}
            {errMsg ? errMsg.map((msg, index) => {
                {/* console.log(index, msg.message) */ }
                return (
                    <span key={index} className="mt-3 text-sm text-red-500 ">
                        {msg.message}
                    </span>)
            }) : null}

            {/* {console.log("loggd ",errMsg)} */}
        </div>
    )

}