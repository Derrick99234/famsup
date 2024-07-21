import React from 'react'
import Button from '../Button/Button'
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer'

function OurService() {
  return (
    <>
        <div className='whychoose mt-[15%] xsm:mt-[8%]'>
            <div className='whygen flex flex-col justify-center items-center'>
                <Button text="what we offer" className="uppercase text-white font-[500] px-[30px] py-[10px] mb-[20px]"/>
                <h2 className='text-myblack font-[600] text-center font-Inter capitalize md:w-[70%] mxl:w-[45%] text-[30px]'>Providing Service in All Social Networks</h2>
            </div>
            <WhatWeOffer />
        </div>
    </>
  )
}

export default OurService