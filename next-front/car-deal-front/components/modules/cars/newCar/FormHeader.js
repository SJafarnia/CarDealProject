import { Fragment } from 'react'
import { useSelector } from "react-redux";
import { selectIndex } from "@/redux/features/indexer/indexerSlice";

export const numOfSteps = 4

// const looper = Array(numOfSteps).fill()

const looper = ["مشخصات خودرو", "وضعیت خودرو", "توضیحات", "تصاویر"]

function FormHeader(props) {
    const pageIndex = useSelector(selectIndex)
    let titleClass = "font-normal border-solid text-white border-white"

    return (
        <div className="bg-[#3E47DD] justify-around rounded-md m-2 p-1 md:h-[5rem] flex items-center break-words text-xl">
            {looper.map((item, index) => {
                if (pageIndex == index + 1) {
                    titleClass += " border-b-[1px] "
                } else {
                    titleClass = "font-normal border-solid text-white border-white"
                }
                return (
                    <Fragment key={index + 1}>
                        <div className='item-name flex items-center p-5'>
                            {
                                pageIndex > index + 1 ?
                                    <div className='step-number w-6 h-6 bg-[#66CC33] ml-3 rounded-full text-[#3E47DD] font-sans flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    :
                                    <div className='step-number w-6 h-6 bg-[#D8DBFD] ml-3 rounded-full text-[#3E47DD] font-sans flex justify-center items-center'>
                                        <p className='text-sm'>{index + 1}</p>
                                    </div>
                            }
                            <p className={titleClass}>{item}</p>
                        </div>
                        {index + 1 == numOfSteps ? null : <div className='crumb flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>

                        </div>}
                    </Fragment>
                )
            })}

        </div>
    )
}


export default FormHeader
