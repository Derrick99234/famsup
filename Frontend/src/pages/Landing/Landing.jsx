import React from "react";
import Button from "../../components/Button/Button";
import Hero from "../../assets/images/Gen Z.gif"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Landing() {
  return (
    <>
      <div className="hero my-[70px] mxl:my-[50px]">
        <div className="welcome bg-[white] px-[30px] py-[20px] sm:px-[50px] flex flex-col mxl:flex-row gap-[40px] mxl:gap-[0px] items-center mxl:justify-start justify-center">
          <div className="welcometxtbtn flex flex-col justify-center items-center mxl:justify-start mxl:items-start">
            <h2 className="text-myblack font-[700] font-Inter capitalize mxl:w-[70%] w-[90%]  text-[35px] sm:text-[45px] mxl:text-[50px] text-center mxl:text-start">
              the best social media panel in the market!
            </h2>
            <p className="text-myblack text-[16px] font-[500] mxl:w-[70%] w-[90%] text-center mxl:text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis rerum accusamus hic exercitationem, vel nemo
              cupiditate, rem sint recusandae error quam autem officiis! At illo
              incidunt illum! Mollitia dolor ipsam nulla, corporis aut, numquam
            </p>
            <div className="btn flex justify-center mxl:justify-start mt-[30px]">
              <Link to="/signup">
                <Button text="get started" icon={FaArrowRight} className="uppercase text-white font-[500] px-[30px] py-[10px]" />
              </Link>
            </div>
          </div>
          <div className="welcomeimg sm:w-[70%] sm:flex sm:justify-center hidden">
            <img src={Hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
