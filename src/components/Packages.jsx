import React from 'react'
import { TiTick } from "react-icons/ti";
import { NavLink } from 'react-router-dom';


const Packages = () => {
  return (
    <div className='bg-[#D4EBF8] pt-20'>

<div className="w-screen h-44  text-center py-10 text-white bg-[#0A3981]">
        <h1 className='text-4xl hidden md:block font-bold mb-2 md:text-5xl lg:text-7xl'>Select The Perfect Driving Package</h1>
        <h1 className='text-5xl  md:hidden font-bold mb-2 '>Our Packages</h1>
        <h1 className='lg:text-xl' >Empowering Safe, Confident Drivers for Life</h1>
      </div>


      <div className='py-14 px-10 flex flex-col justify-center gap-6 lg:gap-14 md:flex-row items-center'>
        <div className='bg-white w-72 lg:w-80 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out  rounded-lg  h-52 lg:h-56 '>
          <div className='w-full bg-[#0A3981] text-white text-center rounded-t-lg text-3xl py-1 font-bold lg:text-4xl'>
            <h1>1 Session</h1>
          </div>
          <div className='flex gap-6 py-4 text-center justify-evenly'>
            <div className='' >
              <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$50</h1>
              <h1 className='text-blue-500 italic mt-1 md:text-sm lg:text-lg'>60 mins</h1>
            </div>
            <span className='border'></span>
            <div className=''>
            <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$70</h1>
            <h1 className='text-blue-500 mt-1 italic md:text-sm lg:text-lg'>90 mins</h1>
            </div>
          </div>
          <h1 className='flex items-center text-md justify-center'>
          <TiTick className=' text-blue-500 text-2xl text-center inline' /> Pick and Drop Off
          </h1>
          <NavLink to="/register" className='bg-blue-500 w-24 mt-4 rounded-xl px-2 text-sm py-1 text-center text-white'>
            Register</NavLink>
          
        </div>
        <div className='bg-white w-72 lg:w-80 flex flex-col items-center  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out  h-52 lg:h-56 '>
          <div className='w-full bg-[#0A3981] text-white text-center py-1 rounded-t-lg text-3xl font-bold lg:text-4xl'>
            <h1>5 Sessions</h1>
          </div>
          <div className='flex gap-2 mt-4 text-center'>
            <div>
              <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$225</h1>
              <h1 className='text-blue-500 mt-1 italic md:text-sm lg:text-lg'>60 mins/session</h1>
            </div>
            <span className='border'></span>
            <div>
            <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$325</h1>
            <h1 className='text-blue-500 mt-1 italic md:text-sm lg:text-lg'>90 mins/Session</h1>
            </div>
          </div>
          <h1 className='flex items-center text-md justify-center'>
          <TiTick className=' text-blue-500 text-2xl text-center inline' /> Pick and Drop Off
          </h1>
          <NavLink to="/register" className='bg-blue-500 w-24 mt-6 md:mt-4 lg:mt-8 rounded-xl px-2 text-sm py-1 text-center text-white'>Register</NavLink>
          
        </div>
        <div className='bg-white w-72 lg:w-80 flex flex-col items-center text-center rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out  h-52 lg:h-56 '>
          <div className='w-full bg-[#0A3981] text-white text-center py-1 rounded-t-lg text-3xl font-bold lg:text-4xl'>
            <h1>10 Sessions</h1>
          </div>
          <div className='flex gap-2 mt-4'>
            <div>
              <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$425</h1>
              <h1 className='text-blue-500  mt-1 italic md:text-sm lg:text-lg'>60 mins/Session</h1>
            </div>
            <span className='border'></span>
            <div>
            <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$625</h1>
            <h1 className='text-blue-500 mt-1 italic md:text-sm lg:text-lg'>90 mins/Session</h1>
            </div>
          </div>
          <h1 className='flex items-center text-md justify-center'>
          <TiTick className=' text-blue-500 text-2xl text-center inline' /> Pick and Drop Off
          </h1>
          <NavLink to="/register" className='bg-blue-500 w-24 mt-6 md:mt-4 lg:mt-8 rounded-xl px-2 text-sm py-1 text-center text-white'>Register</NavLink>
          
        </div>

      </div>

      <h1 className='text-4xl tracking-tight md:text-5xl text-center font-bold'>Road Test Packages</h1>


      <div className='py-10 px-10 flex flex-col justify-center gap-6 lg:gap-14 md:flex-row items-center'>
        <div className='bg-white w-80 lg:w-96 flex flex-col items-center rounded-lg  h-72  hover:scale-105 transition-transform duration-300 ease-in-out '>
          <div className='w-full bg-[#0A3981] text-white text-center rounded-t-lg text-3xl py-1 font-bold lg:text-4xl'>
            <h1>Delta & Surrey</h1>
          </div>
          <div className='flex gap-4 py-4 px-2 text-center justify-evenly'>
            <div className='' >
              <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$200</h1>
              <h1 className='text-blue-500 italic mt-1 md:text-sm lg:text-lg'>45 Mins.before the test</h1>
            </div>
            <span className='border'></span>
            <div className=''>
            <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$350</h1>
            <h1 className='text-blue-500 mt-1 italic md:text-sm lg:text-lg'>90 mins before the test</h1>
            </div>
          </div>
          <h1 className='flex items-center text-md justify-center'>
          <TiTick className=' text-blue-500 text-3xl text-center inline' /> Vehicle for Road Test
          </h1>
          <h1 className='flex items-center text-md justify-center'>
          <TiTick className=' text-blue-500 text-3xl text-center inline' /> Pick and Drop Off
          </h1>
          <NavLink to="/register" className='bg-blue-500 w-24 mt-2 rounded-xl px-2 text-sm py-1 text-center text-white'>Register</NavLink>
          
        </div>
        <div className='bg-white w-80 lg:w-96 flex flex-col items-center  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out  h-72 '>
          <div className='w-full bg-[#0A3981] text-white text-center py-1 rounded-t-lg text-3xl font-bold lg:text-4xl'>
            <h1>Vancouver</h1>
          </div>
          <div className='flex gap-4 mt-4 px-2 text-center'>
            <div>
              <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$325</h1>
              <h1 className='text-blue-500  mt-1 italic md:text-sm lg:text-lg'>45 mins before the test</h1>
            </div>
            <span className='border'></span>
            <div>
            <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-zinc-700'>$550</h1>
            <h1 className='text-blue-500 mt-1 italic md:text-sm lg:text-lg'>90 mins before the test</h1>
            </div>
          </div>
          <h1 className='flex items-center mt-4 text-md justify-center'>
          <TiTick className=' text-blue-500 text-3xl text-center inline' /> Vehicle for Road Test
          </h1>
          <h1 className='flex items-center text-md justify-center'>
          <TiTick className=' text-blue-500 text-3xl text-center inline' /> Pick and Drop Off
          </h1>
          <NavLink to="/register" className='bg-blue-500 w-24 mt-2  rounded-xl px-2 text-sm py-1 text-center text-white'>Register</NavLink>
          
        </div>
        

      </div>

      <h1 className='p-10 text-center text-2xl font-bold tracking-tight'>Check Our <NavLink className="text-blue-500 italic underline" to="/faq">FAQs</NavLink>  Page for any Package Related Queries.</h1>

      


      






    </div>
  )
}

export default Packages