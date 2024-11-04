import React from 'react'

export default function Front() {
  return (
    <div className='bg-slate-800 p-10 flex '>
      <div className="w-[300px]">
         <h1 className='text-white font-extrabold text-4xl '>
          This website is awesome
         </h1>
         <p className='text-base  text-gray-300 mb-4 w-[390px]'>This website has some subtext that goes under the main title.  it's a smaller font and the color is lower contrast </p>
         <button className="bg-blue-500 text-white py-3 px-10 rounded hover:bg-blue-600">Sign up</button>
      </div>
      {/* <img src="image (2).jpg" alt="" className='w-[620px] h-[200px] ml-[200px]' /> */}
      <div className="w-[620px] h-[200px] ml-[200px] bg-slate-300"></div>
    </div>
  )
}
