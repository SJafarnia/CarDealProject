import { useGetViews } from '@/components/utils/customHooks'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'



export default function PostHeader({ brand, model, price, year, id }) {
  const [views, setViews] = useState("")
  const [popOver, setPopOver] = useState(false)
  const url = useRef("")

  useGetViews(id, setViews)

  useEffect(() => {
    const currentUrl = window.location.href;
    url.current = currentUrl
  }, []);

  const urlShare = (e) => {
    navigator.clipboard.writeText(url.current);
    setPopOver(true)
  }

  const remover = (e) => {
    setTimeout(() => {
      setPopOver(false)
    }, 2000)
  }

  return (
    <div className="header">
      <div className="flex md:items-center md:flex-row xs:flex-col">
        <div className="rightsec p-1">
          <div className="flex p-1">
            {/* <div className="condition ml-7">
              <div className="bg-[#EB6245] text-white inline-block text-xs py-1 px-4 font-semibold uppercase rounded-[40px]">
                جدید
              </div>
            </div> */}
            {/* <div className="postdate flex items-center align-middle justify-center ml-7 whitespace-nowrap">
              <div className="my-auto ">
                <div className="text-[14px] align-middle flex items-center">
                  <Image src="/icons/header/clock.png" alt="" className="inline-block ml-2 align-middle line w-4 h-4" width={14} height={16} />

                  <span className="">یک ماه پیش</span>
                </div>
              </div>
            </div> */}
            <div className="views flex items-center align-middle justify-center whitespace-nowrap">
              <div className="my-auto ">
                <div className="text-[14px] align-middle flex items-center">
                  <Image src="/icons/header/eye.png" alt="views بازدید ها" className="inline-block ml-2 align-middle line w-4 h-4" width={16} height={16} />
                  <span className="">{views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="leftsec md:mr-auto flex xs:mt-3 md:mt-0 p-1">
          <div className="flex">
            <div className="save ml-4 flex items-center align-middle justify-center whitespace-nowrap">
              <div className="my-auto ">
                <div className="text-[14px] align-middle flex items-center">
                  <Image src="/icons/header/heart.png" alt="save" className="inline-block cursor-pointer ml-2 align-middle line w-4 h-4" width={16} height={16} />
                  <span className="">ذخیره</span>
                </div>
              </div>
            </div>
            {/* <div className="compare flex ml-4 items-center align-middle justify-center whitespace-nowrap">
              <div className="my-auto ">
                <div className="text-[14px] align-middle flex items-center">
                  <Image src="/icons/header/shuffle.png" alt="" className="inline-block ml-2 align-middle line w-4 h-4" width={14} height={16} />

                  <span className=""> مقایسه</span>
                </div>
              </div>
            </div> */}
            <div className="print flex ml-4 items-center align-middle justify-center whitespace-nowrap">
              <div className="my-auto ">
                <div className="text-[14px] align-middle flex items-center">
                  <Image src="/icons/header/printing.png" alt="print" className="inline-block ml-2 align-middle line w-4 h-4" width={16} height={16} />
                  <span className="">پرینت</span>
                </div>
              </div>
            </div>
            <div className="share flex items-center align-middle justify-center whitespace-nowrap">
              <div className="my-auto ">
                <div className="text-[14px] align-middle flex items-center relative">
                  <Image src="/icons/header/share.png" onClickCapture={urlShare} onClick={remover} alt="share" className="inline-block cursor-pointer ml-2 align-middle line w-4 h-4" width={16} height={16} />
                  <div data-popover id="popover-no-arrow" role="tooltip" className={`absolute -left-2 bottom-7 z-10 ${popOver ? 'visible opacity-100' : 'opacity-0'} inline-block w-64 text-sm text-gray-500 transition-opacity duration-700 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}>
                    <div className="px-3 py-2">
                      <p>لینک در کلیپبورد شما کپی شد!</p>
                    </div>
                  </div>
                  <span className="">اشتراک گذاری</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title flex mt-6 text-[#1A3760] p-1">
        <div className="right-main-name">
          <div>
            <h1 className="align-middle inline-block lg:text-3xl text-xl font-semibold">{brand} {model} - {year} </h1>
          </div>
          {/* <div className="addrs">
            <span className="p-1 font-semibold">تهران، جردن</span>
          </div> */}
        </div>

        <div className="left-price-col md:mr-auto flex">
          <div className="price lg:text-2xl px-1">
            <span className="font-bold">{price}</span><span className="p-1 mx-1">ریال</span>
          </div>
        </div>
      </div>
    </div>
  )
}

