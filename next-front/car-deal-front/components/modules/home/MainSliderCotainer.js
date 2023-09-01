import CarSlider from './utils/CarSlider'
import Image from 'next/image'
import { DataContext } from '@/pages/index'
import ListPreLoader from '../cars/carsList/items/utils/ListPreLoader'
import { Fragment } from 'react'


export default function MainSliderContainer() {
  return (
    <section className="cardslider bg-[#eff3f6] mb-[30px]">
      <div className="pt-[80px] pb-[60px] mx-auto relative flex">
        <div className="flex-wrap items-start w-full relative">
          <div className="text-3xl listhead text-center mb-5">
            <h2 className="">جدید ترین ها</h2>
          </div>
          <div className="listitems w-full flex relative box-border pt-[30px] px-4 pb-4">
            <div className="w-1/12 flex items-center">
              <div className="w-full text-left">
                <button id='slidemainprev' className="p-1 sm:p-2 md:p-3 lg:p-5 rounded-full bg-white border border-gray-100 shadow-lg ml-1 sm:ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>

                </button>
              </div>
            </div>
            <div id="sliderContainer" className="mx-auto w-10/12 overflow-hidden rounded-lg">
              <ul id="slider" className="flex rounded-lg">
                <DataContext.Consumer>
                  {value =>
                    value ?
                      value.slice(-8).map(item => (<Fragment key={item.id}><CarSlider {...item} /></Fragment>)) : Array(3).fill().map((item,indx) => <ListPreLoader key={indx} />)}
                </DataContext.Consumer>
              </ul>
            </div>
            <div className="w-1/12 flex items-center">
              <div className="w-full ">
                <button id='slidemainnext' className="p-1 sm:p-2 mr-1 md:p-3 lg:p-5 rounded-full bg-white border border-gray-100 shadow-lg sm:mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>

                </button>


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}