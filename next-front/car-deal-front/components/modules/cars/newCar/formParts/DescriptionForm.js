import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, selectIndex } from "@/redux/features/indexer/indexerSlice";


function DescriptionForm({ setFormData }) {
    const pageIndex = useSelector(selectIndex)
    const dispatch = useDispatch()

    const textHandler = (e) => {
        const { name, value } = e.target
        setFormData(name, value)
    }

    const nextBtnHandler = () => {
        if (pageIndex < 4) { dispatch(increase()) }
    }

    const prevBtnHandler = () => {
        if (pageIndex > 1) {
            dispatch(decrease())
        }
    }

    return (
        <div className="w-full px-12 pt-4 pb-56 animate-fade-in opacity-5 transition-all">
            <div className="relative z-10 rounded-xl border-0 border-solid bord mt-5">
                <div className="bg-[#ffffff] shadow-md rounded-xl shadow-[#48588514]">
                    <p className="p-5 text-xl text-blue-900">توضیحات تکمیلی</p>
                    <hr className="w-full border-t-[1px] border-solid border-[#E2E8F0]"></hr>
                    <div className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col justify-normal">
                            <div className="flex items-end mb-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    توضیحات
                                </label>
                            </div>
                            <div className="flex relative">
                                <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={""} id="description" onChange={textHandler} name="description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-5" >
                <button className="bg-form-blue h-11 w-28 text-white text-lg rounded-md" onClick={nextBtnHandler}>ادامه</button>

                <button className="bg-form-blue h-11 w-28 text-white text-lg rounded-md" onClick={prevBtnHandler}>مرحله قبل</button>
            </div>


        </div>
    )
}

export default DescriptionForm