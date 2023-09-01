import { useState, useEffect } from "react";

export default function CarInput({ type, placeholder, name, change, pattern }) {

    let maxL = null
    let minL = null
    if (name === "year") {
        maxL = 2030
        minL = 1300
    }
    let inputClassName = "w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200 focus:ring-0 focus:shadow-none focus:border-gray-400 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"

    return (
        <div className="mb-6">
            {/* {name == "year" ? <input maxLength={"4"} dir="rtl" type={type} placeholder={placeholder} name={name}
                onChange={change} className={inputClassName} /> : null} */}
            <input pattern={pattern} max={maxL} min={minL} dir="rtl" type={type} placeholder={placeholder} name={name}
                onChange={change} className={inputClassName} />
        </div>
    )

}