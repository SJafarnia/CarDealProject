import Image from "next/image"

export default function PostDetails({ desc }) {
  return (
    <div className="overview py-[30px] px-[40px] mb-[30px] border border-solid border-[#EAEAEA] bg-[#FFF] rounded-lg">
      <h2 className="mb-6 text-[21px] text-[#1a3760] font-semibold">توضیحات</h2>
      <div className="relative before:content-[''] before:absolute before:-bottom-7 before:left-0 before:w-full before:h-[70%] before:bg-gradient-to-b from-transparent to-[#fff] ">
        <div className="overflow-hidden overflow-y-scroll no-scrollbar scroll-smooth h-max text-[#5f6973]">
          <p className="mb-5">
            {desc? desc:"توضیحاتی وجود ندارد."}
          </p>
        </div>
      </div>
    </div>
  )
}