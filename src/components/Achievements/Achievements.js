import React from 'react'
import { ImHappy } from "react-icons/im";
import CountUp from 'react-countup';

function Achievements() {
  return (
    <>
        <div className="achievements mt-[10%]">
            <div className='achievements-cont'>
                <div className='achievements-cards gap-[20px] grid-cols-1 md:grid-cols-2 grid mxl:grid-cols-4'>
                    <div className='achievements-card bg-[white] w-[100%] rounded-[5px] py-[20px] px-[40px] flex items-center shadow-lg gap-[30px]'>
                        <div className='icon'>
                        <ImHappy className='text-firstcolor text-[35px]'/>
                        </div>
                        <div className='achieved'>
                        <CountUp end={1000} duration={10} className='text-[35px] font-[500] text-thirdcolor' /> 
                        <p className='text-[13px] font-medium text-myblack'>Happy Clients</p>
                        </div>
                    </div>
                    <div className='achievements-card bg-[white] w-[100%] rounded-[5px] py-[20px] px-[40px] flex items-center shadow-lg gap-[25px]'>
                        <div className='icon'>
                        <ImHappy className='text-firstcolor text-[35px]'/>
                        </div>
                        <div className='achieved'>
                        <CountUp end={1000} duration={10} className='text-[35px] font-[500] text-thirdcolor' /> 
                        <p className='text-[13px] font-medium text-myblack'>Happy Clients</p>
                        </div>
                    </div>
                    <div className='achievements-card bg-[white] w-[100%] rounded-[5px] py-[20px] px-[40px] flex items-center shadow-lg gap-[25px]'>
                        <div className='icon'>
                        <ImHappy className='text-firstcolor text-[35px]'/>
                        </div>
                        <div className='achieved'>
                        <CountUp end={1000} duration={10} className='text-[35px] font-[500] text-thirdcolor' /> 
                        <p className='text-[13px] font-medium text-myblack'>Happy Clients</p>
                        </div>
                    </div>
                    <div className='achievements-card bg-[white] w-[100%] rounded-[5px] py-[20px] px-[40px] flex items-center shadow-lg gap-[25px]'>
                        <div className='icon'>
                        <ImHappy className='text-firstcolor text-[35px]'/>
                        </div>
                        <div className='achieved'>
                        <CountUp end={1000} duration={10} className='text-[35px] font-[500] text-thirdcolor' /> 
                        <p className='text-[13px] font-medium text-myblack'>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Achievements