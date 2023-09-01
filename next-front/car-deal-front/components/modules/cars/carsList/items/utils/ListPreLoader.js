
function ListPreLoader() {
    return (
        <div className="animate-fade-in opacity-5 transition-all w-full">
            <div className="listitem px-[15px]">
                <article className="relative">
                    <div className="thumbnailwrapper relative">
                        <div className="imagethumbnail skeleton p-[10px] md:h-[300px] lg:h-[200px] rounded-sm listing-item block">
                        </div>
                    </div>
                    <div className="iteminfo rounded-b-lg py-[13px] px-5 border-[#EAEAEA] bg-white" dir="rtl">
                        <div className="flex flex-col md:justify-normal xs:justify-between">
                            <div className="listingpricd flex mb-4 skeleton w-3/5 h-4 rounded-sm">
                            </div>
                            <div className='flex items-center mt-2 skeleton w-full h-4 rounded-sm'>
                            </div>
                            <div dir='rtl' className="inforight p-2 text-xs border-t-[1px] border-solid border-[#EAEAEA] pt-5 mt-2">
                                <div className="flex">
                                    <div className="road ml-[10px] skeleton w-1/3 h-4 rounded-sm">
                                    </div>
                                    <div className="fuel_type ml-[10px] skeleton w-1/3 h-4 rounded-sm">
                                    </div>
                                    <div className="transmission ml-[10px] skeleton w-1/3 h-4 rounded-sm">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default ListPreLoader