// import { Offcanvas } from "tw-elements";
import { useState, useEffect } from "react"


function PopoverMenu() {
    const [visibility, setVisibility] = useState(false)


    // initTE({ Offcanvas, Ripple });
    return (
        <div className="relative">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>
            <div className="fixed bg-slate-100 h-screen">

            </div>
        </div>
    )
}


export default PopoverMenu