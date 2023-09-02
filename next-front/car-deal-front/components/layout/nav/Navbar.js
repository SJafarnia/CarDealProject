import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import NavItem from './NavItem';

function Navbar({ main }) {
    const [isSigneIn, setIsSigneIn] = useState(false)
    const isMobil = useMediaQuery({ maxWidth: 900 });
    const [isMobile, setIsMobile] = useState(false)
    const [showFilters, setShowFilters] = useState("hidden")

    useIsomorphicLayoutEffect(() => {
        if (isMobil) { setIsMobile(true) } else { setIsMobile(false) }
    }, [isMobil])

    useEffect(() => {
        const isSigneIn = localStorage.getItem("SignedIn") || ""
        if (isSigneIn === "true") setIsSigneIn(isSigneIn)
    }, [])

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
        <>
            <div className={`menu-list text-center items-center flex absolute pt-6 ${isMobile ? 'block z-50' : 'hidden'} ${main == "true" ? "text-white" : "text-black"} `}>
                <div className="mr-8">
                    <button className="text-3xl cursor-pointer" onClick={() => setShowFilters("block")}>☰</button>
                </div>
            </div>
            <div className={`${isMobile ? `${showFilters} fixed top-0 bottom-0 left-0 xs:w-10/12 sm:w-9/12 mr-4 z-50 h-full` : "w-full px-3 absolute py-6"} ${main == "true" ? 'text-white' : 'text-black border-b border-solid border-b-[#1A37601A]'}`}>
                <header className={`${isMobile ? 'bg-slate-50 rounded-md border-solid border-[#EAEAEA] h-full' : ''} sticky w-full z-10`}>
                    <section className={`flex ${isMobile ? 'flex-col text-black' : 'flex-row'} mx-auto relative`}>
                        <div className={`${isMobile ? 'w-full' : 'w-9/12'} `}>
                            <div className={`${isMobile ? 'flex-col xs:mx-1 xs:ml-1 sm:mx-2 sm:ml-4' : 'flex-row items-center'} flex p-4`}>
                                <div className='flex justify-between items-center p-1'>
                                    <div className="logo mr-8 p-2 ">
                                        <Image src={`${isMobile ? '/download.svg' : '/logo-blue.svg'}`} alt="" className="h-auto w-auto" width={146} height={146}></Image>
                                    </div>
                                    <svg onClick={() => setShowFilters("hidden")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isMobile ? 'block' : 'hidden'} text-slate-500 w-6 h-6`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div className="menu-items ml-12">
                                    <nav>
                                        <div className="">
                                            <ul className={`flex ${isMobile ? 'flex-col' : 'flex-row ps-10'} navbar block p-4 w-auto list-none`}>
                                                <NavItem title="خانه" href="/" />
                                                <NavItem title="خودرو ها" href="/cars" />
                                                <NavItem title="درباره ما" href="/about" />
                                                <NavItem title="تماس با ما" href="/contact" />
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className={`${isMobile ? 'w-full' : 'w-3/12'} `}>
                            <div className="small-nav h-full ml-4 flex p-4 justify-end items-center">
                                {isSigneIn ?
                                    <Link href="/cars/new-car">
                                        <div className="lgn-section bg-blue-500 rounded-lg p-1 flex items-center self-center hover:transition-transform hover:scale-110 ease-in-out duration-150">
                                            <div className="p-2">
                                                <span className='p-2'>ثبت خودرو</span>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <Link href="/auth/login">
                                        <div className="lgn-section flex items-center self-center hover:transition-transform hover:scale-110 ease-in-out duration-150">
                                            <div className="mr-8 p-1">
                                                <span className="hover:transition-transform hover:scale-110 ease-in-out duration-150">ثبت نام</span>
                                                <span className="mx-2">|</span>
                                                <span>ورود</span>
                                            </div>
                                        </div>
                                    </Link>
                                }
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        </>
    )
}

export default Navbar