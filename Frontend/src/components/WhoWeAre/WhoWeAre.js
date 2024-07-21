import React from 'react'
import Whoweare from '../../assets/images/About us page-bro.png'
import Button from '../Button/Button'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function WhoWeAre() {
  return (
        <>
            <div className='main-cont my-[10%]'>
                <div className='bg-[white] flex flex-col-reverse mxl:flex-row gap-[10px] mxl:gap-[50px] items-center mxl:justify-start justify-center'>
                    <div className=''>
                        <img src={Whoweare} alt='who we are' className='mxl:h-[65vh] md:h-[100vh]' />
                    </div>
                    <div className='bg-green-100 mxl:w-[50%] flex flex-col justify-center items-center sm:justify-start sm:items-start xsm:w-[100%] px-[10px] py-[15px] sm:px-[30px] sm:py-[20px]'>
                        <h2 className='text-[16px] text-thirdcolor font-[500] uppercase py-[10px]'>who we are</h2>
                        <h2 className='capitalize text-[30px] text-center sm:text-start font-[600] py-[10px]'>what we offer for your success brand</h2>
                        <p className='pb-[20px] text-center sm:text-start'>We are active for support only 24 hours a day and seven times a week with all of your demands and services around the day.
                        Don't go anywhere else. We are here ready to serve you and help you with all of your SMM needs. Users or Clients with SMM orders and in need of CHEAP SMM services are more then welcome in our SMM PANEL.</p>
                        <div className=''>
                            <Link>
                             <Button text="view services" icon={FaArrowRight} className="uppercase text-white font-[500] px-[30px] py-[10px]" />   
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default WhoWeAre