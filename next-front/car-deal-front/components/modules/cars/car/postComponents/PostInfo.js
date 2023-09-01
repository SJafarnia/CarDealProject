import Image from "next/image"

export default function PostInfo({ brand, model, year, usage, fuel, transmission, color, seller }) {

  let transmissionName
  let fuelName
  let colorName

  switch (fuel?.toLowerCase()) {
    case "hybrid":
      fuelName = "هیبرید"
      break
    case "diesel":
      fuelName = "دیزل"
      break
    case "petrol":
      fuelName = "بنزین"
      break
  }

  switch (transmission?.toLowerCase()) {
    case "automatic":
      transmissionName = "اتوماتیک"
      break
    case "manual":
      transmissionName = "دستی"
      break
  }

  switch (color?.toLowerCase()) {
    case "stain":
      colorName = "لکه رنگ"
      break
    case "original":
      colorName = "بی رنگ"
      break
    case "painted":
      colorName = "رنگ شده"
      break
  }


  return (
    <div className="min-w-full cont top-0 md:w-[33.33%] md:float-right">
      <aside className="mb-7 rounded-lg bg-transparent block">
        <div>
          <a href={`mailto:${seller.email}`}>
            <div className="flex items-center justify-center gap-2 py-[17px] bg-[#F5C34B] border-[#F5C34B] text-center font-semibold cursor-pointer rounded-lg text-sm whitespace-nowrap min-w-max ">
              <span className="text-[#1A3760]"> پیشنهاد قیمت
              </span>
              <Image src="/icons/coin.png" className="w-[18px] h-[18px]" alt="" width={18} height={18} />
            </div>
          </a>
          <a href={`tel:+98${+seller.phone}`}>
            <div className="mt-5 flex items-center justify-center gap-2 py-[17px] bg-[#1A3760] border-[#1A3760] text-center font-semibold cursor-pointer rounded-lg text-sm whitespace-nowrap ">
              <span className="text-[#fff]">تست درایو
              </span>
              <Image src="/icons/steering-wheel.png" className="w-[18px] h-[18px]" alt="تماس" width={18} height={18} />
            </div>
          </a>
        </div>
      </aside>
      <aside>
        <div className="lg:w-full min-w-fit border border-solid border-[#EAEAEA] rounded-lg bg-[#fff]">
          <ul className="lg:pt-[27px] lg:pb-[30px] lg:px-[30px] xs:p-4">

            <li className="w-full mb-[7px] pb-[7px] border-b border-solid border-[#EAEAEA] flex items-center">
              <div className="text-[#1a3760] font-semibold text-[13px]">تولید کننده</div>
              <div className="mr-auto ml-2 text-[#5f6973]">
                <span href="" className="outline-none"> {brand}</span>
              </div>
            </li>
            <li className="w-full mb-[7px] pb-[7px] border-b border-solid border-[#EAEAEA] flex items-center">
              <div className="text-[#1a3760] font-semibold text-[13px]">مدل</div>
              <div className="mr-auto ml-2 text-[#5f6973]">
                <span href="" className="outline-none">{model}</span>
              </div>
            </li>
            <li className="w-full mb-[7px] pb-[7px] border-b border-solid border-[#EAEAEA] flex items-center">
              <div className="text-[#1a3760] font-semibold text-[13px]">سال تولید</div>
              <div className="mr-auto ml-2 text-[#5f6973]">
                <span href="" className="outline-none">{year}</span>
              </div>
            </li>
            <li className="w-full mb-[7px] pb-[7px] border-b border-solid border-[#EAEAEA] flex items-center">
              <div className="text-[#1a3760] font-semibold text-[13px]">کارکرد</div>
              <div className="mr-auto ml-2 flex text-[#5f6973] items-center">
                <span className="pl-1 text-[10px]">(Km)</span><span href="" className="outline-none">{usage} </span>
              </div>
            </li>
            <li className="w-full mb-[7px] pb-[7px] border-b border-solid border-[#EAEAEA] flex items-center">
              <div className="text-[#1a3760] font-semibold text-[13px]">دنده</div>
              <div className="mr-auto ml-2 flex text-[#5f6973] items-center">
                <span href="" className="outline-none">{transmissionName || transmission} </span>
              </div>
            </li>
            <li className="w-full mb-[7px] pb-[7px] border-b border-solid border-[#EAEAEA] flex items-center">
              <div className="text-[#1a3760] font-semibold text-[13px]">سوخت</div>
              <div className="mr-auto ml-2 flex text-[#5f6973] items-center">
                <span href="" className="outline-none">{fuelName || fuel} </span>
              </div>
            </li>
            <li className="w-full mb-[7px] pb-[7px] flex items-center">
              <div className="text-[#1a3760] font-semibold text-[13px]">رنگ</div>
              <div className="mr-auto ml-2 text-[#5f6973]">
                <span href="" className="outline-none">{colorName || color}</span>
              </div>
            </li>

          </ul>
        </div>
      </aside>
    </div>

  )
}