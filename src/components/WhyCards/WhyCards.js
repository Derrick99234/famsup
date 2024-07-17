import React from "react";
import Great from "../../assets/images/Product quality-rafiki.png"

function WhyCards() {
  return (
    <div className="whycards mt-[5%] gap-[30px] grid-cols-1 md:grid-cols-2 grid mxl:grid-cols-4">
      <div className="whycard bg-[white] w-[100%] h-[70vh] rounded overflow-hidden shadow-md hover:shadow-lg ease-in-out duration-300 transition flex flex-col items-center justify-center">
        <img
          className="h-[40vh] transform transition duration-300 ease-in-out scale-100 hover:scale-95 "
          src={Great}
          alt="Why Us"
        />
        <div className="px-6 py-[25px]">
          <h2 className="font-bold text-[22px] text-center text-thirdcolor">
            Great quality
          </h2>
          <p className="text-myblack font-[500] py-[12px] text-[15px] text-center">
            You'll be satisfied with SMM services we provide.
          </p>
        </div>
      </div>
      <div className="whycard bg-[white] w-[100%] h-[70vh] rounded overflow-hidden shadow-md hover:shadow-lg ease-in-out duration-300 transition flex flex-col items-center justify-center">
        <img
          className="h-[40vh] transform transition duration-300 ease-in-out scale-100 hover:scale-95 "
          src={Great}
          alt="Why Us"
        />
        <div className="px-6 py-[25px]">
          <h2 className="font-bold text-[22px] text-center text-thirdcolor">
            Great quality
          </h2>
          <p className="text-myblack font-[500] py-[12px] text-[15px] text-center">
            You'll be satisfied with SMM services we provide.
          </p>
        </div>
      </div>
      <div className="whycard bg-[white] w-[100%] h-[70vh] rounded overflow-hidden shadow-md hover:shadow-lg ease-in-out duration-300 transition flex flex-col items-center justify-center">
        <img
          className="h-[40vh] transform transition duration-300 ease-in-out scale-100 hover:scale-95 "
          src={Great}
          alt="Why Us"
        />
        <div className="px-6 py-[25px]">
          <h2 className="font-bold text-[22px] text-center text-thirdcolor">
            Great quality
          </h2>
          <p className="text-myblack font-[500] py-[12px] text-[15px] text-center">
            You'll be satisfied with SMM services we provide.
          </p>
        </div>
      </div>
      <div className="whycard bg-[white] w-[100%] h-[70vh] rounded overflow-hidden shadow-md hover:shadow-lg ease-in-out duration-300 transition flex flex-col items-center justify-center">
        <img
          className="h-[40vh] transform transition duration-300 ease-in-out scale-100 hover:scale-95 "
          src={Great}
          alt="Why Us"
        />
        <div className="px-6 py-[25px]">
          <h2 className="font-bold text-[22px] text-center text-thirdcolor">
            Great quality
          </h2>
          <p className="text-myblack font-[500] py-[12px] text-[15px] text-center">
            You'll be satisfied with SMM services we provide.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default WhyCards;
