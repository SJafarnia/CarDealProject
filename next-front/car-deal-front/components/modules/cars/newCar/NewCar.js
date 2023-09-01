import { useRef } from "react";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";


export default function NewCar() {
    const cont = useRef(null)

    return (
        <div ref={cont} className="pt-[80px] sm:pt-[100px] md:pt-[140px] lg:pt-[170px]">
            <FormHeader />
            <FormBody parent={cont} />
        </div>
    )
}