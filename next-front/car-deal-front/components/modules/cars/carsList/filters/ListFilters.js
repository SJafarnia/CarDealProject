import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useFilter } from '../custom/customHooks';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

function ListFilters({ graph, setFilteredGraph }) {
    const isMobil = useMediaQuery({ maxWidth: 900 });
    const [year, setYear] = useState({ yearFrom: "", yearTo: "" })
    const [filters, setFilters] = useState({})
    const [showFilters, setShowFilters] = useState("hidden")
    const [gotClicked, setGotClicked] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const filtersHandler = (e) => {
        const { value, name, checked } = e.target;

        if (value == "") {
            delete filters[name]
            return setFilters({ ...filters })
        }
        if (e.target.getAttribute("type") == "number") {
            const chars = +value.toString().split('').length
            if (chars > 4) return;
        }

        if (checked) {
            return setFilters({ ...filters, [name]: value })
        }

        if (e.target.getAttribute("type") == "text" || e.target.getAttribute("type") == "number") {
            return setFilters({ ...filters, [name]: value })
        }
    }

    const blurHandler = (e) => {
        const { checked, name } = e.target;
        if (e.target.getAttribute("type") == "checkbox") {
            if (!checked) {
                delete filters[name]
                return setFilters({ ...filters })
            }
        }
    }

    const yearHandler = (e) => {
        const { value, name } = e.target;
        const chars = +value.toString().split('').length
        const val = parseInt(value)

        if (chars <= 1 && val > 2) return setYear({ ...year, [name]: '' })
        if (chars > 4) return

        setYear({ ...year, [name]: value })
    }

    const doFiltersHandler = (duration) => {
        setTimeout(() => { setShowFilters("hidden") }, +duration)
    }

    useIsomorphicLayoutEffect(() => {
        if (isMobil) { setIsMobile(true) } else { setIsMobile(false) }
    }, [isMobil])

    useFilter(filters, graph, setFilteredGraph, gotClicked)

    useEffect(() => {
        if (showFilters == "block") {
            document.body.classList.add('popup-menu-open');
        } else {
            document.body.classList.remove('popup-menu-open');
        }
        return () => {
            document.body.classList.remove('popup-menu-open');
        }
    }, [showFilters]);


    return (
        <aside className={`${isMobile ? 'px-0' : 'px-3'} filters section lg:w-1/4`}>

            <button className={`${isMobile ? 'block' : 'hidden'} fixed top-1/2 left-0 z-30`} onPointerDown={() => setShowFilters("block")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-sm p-1 text-white bg-theme-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className={`${isMobile ? `${showFilters} h-full fixed top-1 bottom-1 right-0 w-5/6` : 'block'} z-50 bg-slate-50  w-full overflow-auto pt-[27px] p-[30px] border-[1px] border-solid border-[#EAEAEA] rounded-lg fade-transition`}>
                <div className='flex justify-between'>
                    <h2 className='mb-5 text-base'>فیلتر ها</h2>
                    <svg onPointerDown={() => doFiltersHandler(200)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isMobile ? 'block' : 'hidden'} text-slate-500 w-6 h-6`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </div>
                {/* <input type="text" onInput={filtersHandler} name='query' placeholder="عبارت جستجو" className="w-full mb-4 p-2 h-[50px] py-3 px-5 border-[1px] bg-none rounded-lg text-sm ease-in-out transition border-solid border-[#EAEAEA] focus:border-[#9e9e9e]" /> */}
                <input type="text" onInput={filtersHandler} name='brand' placeholder="سازنده" className="w-full mb-4 p-2 h-[50px] py-3 px-5 border-[1px] bg-none rounded-lg text-sm ease-in-out transition border-solid border-[#EAEAEA] focus:border-[#9e9e9e]" />
                <input type="text" onInput={filtersHandler} name='model' placeholder="مدل" className="w-full mb-4 p-2 h-[50px] py-3 px-5 border-[1px] bg-none rounded-lg text-sm ease-in-out transition border-solid border-[#EAEAEA] focus:border-[#9e9e9e]" />
                <h2 className='mt-2 mb-5 text-base'>سال تولید</h2>
                <div className='flex justify-between'>
                    <input type="number" onInput={filtersHandler} name='yearFrom' value={year.yearFrom} onChange={yearHandler} min={1310} placeholder="از" className="w-2/5 mb-4 p-2 h-[50px] py-3 px-5 border-[1px] bg-none rounded-lg text-sm ease-in-out transition border-solid border-[#EAEAEA] focus:border-[#9e9e9e]" />
                    <input type="number" onInput={filtersHandler} name='yearTo' value={year.yearTo} onChange={yearHandler} placeholder="تا" className="w-2/5 mb-4 p-2 h-[50px] py-3 px-5 border-[1px] bg-none rounded-lg text-sm ease-in-out transition border-solid border-[#EAEAEA] focus:border-[#9e9e9e]" />
                </div>
                <div className='mt-2 mb-4'>
                    <h2 className='mb-5 text-base'>نوع سوخت</h2>
                    <ul>
                        <li className='m mb-3 text-sm'>
                            <div>
                                <input value="بنزین" onInput={filtersHandler} onChange={blurHandler} className='border-[1px] bg-none rounded-sm ring-0 text-sm ease-in-out transition border-solid border-[#EAEAEA] checked:border-[#9e9e9e] checked:bg-black checked:text-black' id='filter_fuel_gas' type='checkbox' name='fuel-1'></input>
                                <label htmlFor='filter_fuel_gas' className='mb-1 mr-2 font-thin'>بنزین</label>
                            </div>
                        </li>
                        <li className='m mb-3 text-sm'>
                            <div>
                                <input value="دوگانه" onInput={filtersHandler} onChange={blurHandler} className='border-[1px] bg-none rounded-sm ring-0 text-sm ease-in-out transition border-solid border-[#EAEAEA] checked:border-[#9e9e9e] checked:bg-black checked:text-black' id='filter_fuel_duo' type='checkbox' name='fuel-2'></input>
                                <label htmlFor='filter_fuel_duo' className='mb-1 mr-2 font-thin'>دوگانه</label>
                            </div>
                        </li><li className='m mb-3 text-sm'>
                            <div>
                                <input value="دیزل" onInput={filtersHandler} onChange={blurHandler} className='border-[1px] bg-none rounded-sm ring-0 text-sm ease-in-out transition border-solid border-[#EAEAEA] checked:border-[#9e9e9e] checked:bg-black checked:text-black' id='filter_fuel_diesel' type='checkbox' name='fuel-3'></input>
                                <label htmlFor='filter_fuel_diesel' className='mb-1 mr-2 font-thin'>دیزل</label>
                            </div>
                        </li><li className='m mb-3 text-sm'>
                            <div>
                                <input value="برقی" onInput={filtersHandler} onChange={blurHandler} className='border-[1px] bg-none rounded-sm ring-0 text-sm ease-in-out transition border-solid border-[#EAEAEA] checked:border-[#9e9e9e] checked:bg-black checked:text-black' id='filter_fuel_electric' type='checkbox' name='fuel-4'></input>
                                <label htmlFor='filter_fuel_electric' className='mb-1 mr-2 font-thin'>برقی</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='mt-2 mb-4'>
                    <h2 className='mb-5 text-base'>انتقال نیرو</h2>
                    <ul>
                        <li className='m mb-3 text-sm'>
                            <div>
                                <input value="دستی" onInput={filtersHandler} onChange={blurHandler} className='border-[1px] bg-none rounded-sm ring-0 text-sm ease-in-out transition border-solid border-[#EAEAEA] checked:border-[#9e9e9e] checked:bg-black checked:text-black' id='filter_trans_manual' type='checkbox' name='transmission-1'></input>
                                <label htmlFor='filter_trans_manual' className='mb-1 mr-2 font-thin'>دستی</label>
                            </div>
                        </li>
                        <li className='m mb-3 text-sm'>
                            <div>
                                <input value="اتومات" onInput={filtersHandler} onChange={blurHandler} className='border-[1px] bg-none rounded-sm ring-0 text-sm ease-in-out transition border-solid border-[#EAEAEA] checked:border-[#9e9e9e] checked:bg-black checked:text-black' id='filter_trans_auto' type='checkbox' name='transmission-2'></input>
                                <label htmlFor='filter_trans_auto' className='mb-1 mr-2 font-thin'>اتومات</label>
                            </div>
                        </li>
                        <li className='m mb-3 text-sm'>
                            <div>
                                <input value="CVT" onInput={filtersHandler} onChange={blurHandler} className='border-[1px] bg-none rounded-sm ring-0 text-sm ease-in-out transition border-solid border-[#EAEAEA] checked:border-[#9e9e9e] checked:bg-black checked:text-black' id='filter_trans_CVT' type='checkbox' name='transmission-3'></input>
                                <label htmlFor='filter_trans_CVT' className='mb-1 mr-2 font-thin'>CVT</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="button" onClick={isMobile ? () => doFiltersHandler(500) : null} onPointerDown={() => setGotClicked(true)} onPointerUp={() => setGotClicked(false)} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        اعمال فیلتر ها
                    </button>
                    {/* <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                        <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg>
                        Loading...
                    </button> */}
                </div>
            </div>
        </aside>
    )
}

export default ListFilters