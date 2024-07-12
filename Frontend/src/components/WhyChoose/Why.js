import React from 'react'
import Button from '../Button/Button'
import WhyCards from '../WhyCards/WhyCards'

function Why() {
  return (
    <>
        <div className='whychoose mt-[15%] xsm:mt-[8%]'>
            <div className='whygen flex flex-col justify-center items-center'>
                <Button text="WHY CHOOSE US?" className="uppercase text-white font-[500] px-[30px] py-[10px] mb-[20px]"/>
                <h2 className='text-myblack font-[600] text-center font-Inter capitalize md:w-[70%] mxl:w-[45%] text-[30px]'>We help dominate social media with the largest social media panel</h2>
            </div>
            <WhyCards />
        </div>
    </>
  )
}

export default Why