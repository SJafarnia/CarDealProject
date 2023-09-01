import { increase, decrease } from "@/redux/features/indexer/indexerSlice";
import CarFormField from "../utils/CarFormField";
import { useEffect, useState } from "react";
import { specsFields } from "../utils/specs"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIndex } from "@/redux/features/indexer/indexerSlice";


function SpecsForm({ formData, setFormData, fieldsToShow, setFieldsToShow }) {
    const pageIndex = useSelector(selectIndex)
    const dispatch = useDispatch()
    const [isComplete, setIsComplete] = useState(false)
    let specs = specsFields

    const showNextHandler = () => {
        if (fieldsToShow < 6) setFieldsToShow((prev) => prev + 1)
    }
    // logic to render amount of fields 
    useEffect(() => {
        // Set the current input to the last filled input in the form data
        const lastFilledInputIndex = specs.findIndex(input => formData[input.name]);
        setFieldsToShow(Math.max(lastFilledInputIndex, fieldsToShow))
        if (fieldsToShow == 6) setIsComplete(true)
    }, [formData, fieldsToShow]);

    useEffect(() => {
        window.scrollTo({
            top: window.scrollY + 40,
            behavior: 'smooth',
        });
    }, [fieldsToShow])

    const nextBtnHandler = () => {
        if (Object.values(formData).length >= 6) {
            if (pageIndex < 3) { dispatch(increase()) }
        }
    }

    const renderForm = () => {
        return (
            specs.slice(0, fieldsToShow + 1).map((item, index) => {
                if (index + 1 == specsFields.length) {
                    return (
                        <CarFormField key={item.id} type={item.type} value={formData[item.id] || ''} formData={formData} setFormData={setFormData} isFinal={true} showNext={showNextHandler} data={item.data} id={item.id} />
                    )
                }
                return (
                    <CarFormField key={item.id} type={item.type} value={formData[item.id] || ''} formData={formData} setFormData={setFormData} isFinal={false} showNext={showNextHandler} data={item.data} id={item.id} />
                )
            })
        )
    }

    return (
        <div className="w-full px-12 pt-4 pb-56 animate-fade-in opacity-5 transition-all">
            <div className="relative z-10 rounded-xl border-0 border-solid bord mt-5">
                <div className="bg-[#ffffff] shadow-md rounded-xl shadow-[#48588514]">
                    <p className="p-5 text-xl text-blue-900">مشخصات خودرو</p>
                    <hr className="w-full border-t-[1px] border-solid border-[#E2E8F0]"></hr>
                    <div className="p-6 md:grid car-grid">
                        {renderForm()}
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-5">
                {isComplete ? <button className="bg-blue-600 h-11 w-28 text-white text-lg rounded-md" onClick={nextBtnHandler}>ادامه</button> : null}
            </div>

        </div>
    )
}

export default SpecsForm