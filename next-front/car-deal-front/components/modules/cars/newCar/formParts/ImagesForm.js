import React, { useState, useEffect } from "react";
import ImageUploader from '../utils/ImageUploader'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrease, selectIndex } from "@/redux/features/indexer/indexerSlice";


function ImagesForm({ images, setImages, submit, setGraphError }) {
    const pageIndex = useSelector(selectIndex)
    const dispatch = useDispatch()
    const [isComplete, setIsComplete] = useState(false)
    const items = Array(images.length + 1).fill()

    const addHandler = (e) => {
        e.preventDefault();
        if (images.length) setImages([...images, null])
    }

    const removeItem = (itemToRemove) => {
        const updatedItems = images.filter((item) => item !== itemToRemove);
        setImages(updatedItems);
    };

    const loadingHandler = (e) => {
        e.target.setAttribute('disabled', '')
        e.target.innerHTML = "در حال بررسی...";
        setGraphError(false)
    }

    useEffect(() => {
        if (isComplete == false && images.length >= 1) setIsComplete(true)
    }, [images])

    const prevBtnHandler = () => {
        if (pageIndex > 1) {
            dispatch(decrease())
        }
    }
    return (
        <div className="w-full px-12 pt-4 pb-56 animate-fade-in opacity-5 transition-all">
            <div className="relative z-10 rounded-xl border-0 border-solid bord mt-5">
                <div className="bg-[#ffffff] shadow-md rounded-xl shadow-[#48588514]">
                    <p className="p-5 text-xl text-blue-900">شرایط خودرو</p>
                    <hr className="w-full border-t-[1px] border-solid border-[#E2E8F0]"></hr>
                    <div className="p-6 flex flex-col justify-center">
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <ImageUploader remover={file => removeItem(file)} fileSetter={img => setImages([...images, img])} />
                            </React.Fragment>
                        ))}
                        <button dir="rtl" onClick={addHandler} className="rounded-full bg-indigo-600 w-8 h-8 text-white text-lg">+</button>

                    </div>
                </div>
            </div>
            <div className={isComplete ? "flex justify-between mt-5" : "flex justify-end mt-5"}>
                {isComplete ? <button className="bg-form-blue h-11 w-28 text-white text-lg rounded-md" onClickCapture={loadingHandler} onClick={submit}>ادامه</button> : null}
                <button className="bg-form-blue h-11 w-28 text-white text-lg rounded-md" onClick={prevBtnHandler}>مرحله قبل</button>
            </div>


        </div>
    )
}

export default ImagesForm