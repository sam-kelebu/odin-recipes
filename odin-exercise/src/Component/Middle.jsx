import React from "react";

export default function Middle() {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-2xl font-bold text-center mt-[20px]">
          Some randome information
        </h1>
        <div className="flex justify-center flex-wrap">
          <div className="w-48 text-center mx-5 mt-8">
            <div className="border-blue-500 border-4 rounded-lg w-32 h-32 mx-auto mt-3"></div>
            <p>Thise is some subtext under an illustration or image</p>
          </div>
          <div className="w-48 text-center mx-5 mt-8">
            <div className="border-blue-500 border-4 rounded-lg w-32 h-32 mx-auto mt-3"></div>
            <p>Thise is some subtext under an illustration or image</p>
          </div>
          <div className="w-48 text-center mx-5 mt-8">
            <div className="border-blue-500 border-4 rounded-lg w-32 h-32 mx-auto mt-3"></div>
            <p>Thise is some subtext under an illustration or image</p>
          </div>
          <div className="w-48 text-center mx-5 mt-8">
            <div className="border-blue-500 border-4 rounded-lg w-32 h-32 mx-auto mt-3"></div>
            <p>Thise is some subtext under an illustration or image</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 font-light italic text-center py-8">
  <blockquote className=" flex items-center justify-center text-[36px]">
    This is an inspiring quote, or a testimonial from a <br /> customer. Maybe
    it's just filling up space, or maybe <br /> people will actually read it. Who
    knows? All I know <br />is that it looks nice.
  </blockquote>
  <cite className="font-bold text-lg md:text-xl ml-[600px]">-Thor, God of Thunder</cite>
</div>
<div className="flex justify-center">
  <div className="bg-blue-500 flex flex-col md:flex-row items-center justify-between mt-10 py-8 px-6 w-full md:w-[80%]">
    <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
      <h1 className="text-white font-semibold text-center md:text-left">
        Call to action! it's time!
      </h1>
      <p className="font-light text-gray-300 text-center md:text-left">
        Sign up for our product by clicking that button right over there!
      </p>
    </div>
    <button className="text-white border border-b-white rounded px-8 py-2 mr-[100px]">
      Sign up
    </button>
  </div>
</div>
    </div>
  );
}
