import Dropdown from "./utils/Dropdown"

Dropdown
export default function dropdownContainer() {
    return (
        <>
            <div className="xs:w-full origin px-2 font-normal">
                <div className="xs:w-full  relative inline-block text-right mb-4">
                    <Dropdown title="تولید کننده" options={["داخلی", "خارجی"]}></Dropdown>
                </div>

            </div>
            <div className="xs:w-full used px-2 font-normal">
                <div className="xs:w-full relative inline-block text-right mb-4">
                    <Dropdown title="وضعیت خودرو" options={["نو", "کارکرده"]}></Dropdown>
                </div>

            </div>
            <div className="xs:w-full year px-2 font-normal">
                <div className="xs:w-full relative inline-block text-right mb-4">
                    <Dropdown title="نوع سوخت" options={["بزنین", "دوگانه", "هیبرید"]}></Dropdown>
                </div>

            </div>
            <div className="xs:w-full fuel px-2 font-normal">
                <div className="xs:w-full relative inline-block text-right mb-4">

                </div>

            </div>
        </>
    )
}