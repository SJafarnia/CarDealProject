import { increase, decrease, selectIndex } from "@/redux/features/indexer/indexerSlice";
import CarConditionField from "../utils/CarConditionField";
import { useState, useEffect } from "react";
import { conditionFields } from "../utils/conditions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function ConditionForm({ formData, setFormData, fieldsToShow, setFieldsToShow }) {
    const pageIndex = useSelector(selectIndex)
    const dispatch = useDispatch()
    // number of fields to show, set by CarFormField
    // const [fieldsToShow, setFieldsToShow] = useState(1)
    const [isComplete, setIsComplete] = useState(false)
    let conditions = conditionFields

    const nextBtnHandler = () => {
        if (conditions.length == conditionFields.length) {
            if (pageIndex < 4) { dispatch(increase()) }
        }
    }

    const prevBtnHandler = () => {
        if (pageIndex > 1) {
            dispatch(decrease())
        }
    }

    useEffect(() => {
        // Set the current input to the last filled input in the form data
        const lastFilledInputIndex = conditionFields.findIndex(input => formData[input.name]);
        setFieldsToShow(Math.max(lastFilledInputIndex, fieldsToShow));
        if (fieldsToShow == 4) setIsComplete(true)
    }, [formData, fieldsToShow]);

    useEffect(() => {
        window.scrollTo({
            top: window.scrollY + 30,
            behavior: 'smooth',
        });
    }, [fieldsToShow])


    return (
        <div className="w-full px-12 pt-4 pb-56 animate-fade-in opacity-5 transition-all">
            <div className="relative z-10 rounded-xl border-0 border-solid bord mt-5">
                <div className="bg-[#ffffff] shadow-md rounded-xl shadow-[#48588514]">
                    <p className="p-5 text-xl text-blue-900">شرایط خودرو</p>
                    <hr className="w-full border-t-[1px] border-solid border-[#E2E8F0]"></hr>
                    <div className="p-6 md:grid car-grid">
                        {conditions.slice(0, fieldsToShow + 1).map((item, index) => {
                            const keys = Object.keys(item.data[0])
                            const values = Object.values(item.data[0])
                            if (index + 1 == conditionFields.length) {
                                return (
                                    <CarConditionField key={item.id} value={formData[item.id] || ''} isFinal={true} setFormData={setFormData} showHandler={() => setFieldsToShow(fieldsToShow + 1)} choiceValues={values} choiceName={keys} name={item.name} id={item.id} />
                                )
                            }
                            return (
                                <CarConditionField key={item.id} value={formData[item.id] || ''} isFinal={false} setFormData={setFormData} showHandler={() => { if (fieldsToShow < 4) setFieldsToShow(fieldsToShow + 1) }} choiceValues={values} choiceName={keys} name={item.name} id={item.id} />
                            )
                        })}

                    </div>
                </div>
            </div>

            <div className={isComplete ? "flex justify-between mt-5" : "flex justify-end mt-5"}>
                {isComplete ? <button className="bg-form-blue h-11 w-28 text-white text-lg rounded-md" onClick={nextBtnHandler}>ادامه</button> : null}

                <button className="bg-form-blue h-11 w-28 text-white text-lg rounded-md" onClick={prevBtnHandler}>مرحله قبل</button>
            </div>

        </div>
    )
}

export default ConditionForm