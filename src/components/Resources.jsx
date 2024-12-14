import React from 'react'
import icbc from "../assets/icbc.gif"
import sign from "../assets/sign.gif"
import test from "../assets/test.gif"
import book from "../assets/book.gif"
import safety from "../assets/safety.gif"

import { NavLink } from 'react-router-dom';


const Resources = () => {
  return (
    <div className='bg-[#D4EBF8] pt-20'>

      <div className="w-screen h-44  text-center py-10 md:py-8 text-white bg-[#0A3981]">
        <h1 className='text-4xl hidden md:block font-bold mb-2 px-2  md:text-5xl lg:text-7xl'>Master the Road with Confidence</h1>
        <h1 className='text-5xl  md:hidden font-bold mb-2 '>Resources</h1>
        <h1 className='lg:text-xl px-4' >Explore Our Comprehensive Driving Resources to Help You Become a Skilled and Safe Driver.</h1>
      </div>

      <div className='py-10 lg:py-20 text-center gap-6 md:gap-2 lg:gap-10 px-6 flex flex-col md:flex-row items-center justify-center'>
        <div className='w-72 h-60 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md py-4 justify-center flex flex-col items-center lg:w-80 rounded-xl bg-white'>
          <img className='h-20' src={icbc} alt="" />
          <h1 className='font-bold tracking-tight mt-2 text-xl'>ICBC Road Test</h1>
          <p className='text-zinc-700'>Book your ICBC road test.</p>
          <a href="https://www.icbc.com/driver-licensing/visit-dl-office/Book-a-road-test" className="bg-blue-500 text-white mt-2 px-4 py-1 rounded-2xl">
            Book Now
          </a>
        </div>
        <div className='w-72 h-60 justify-center  py-4  flex flex-col items-center lg:w-80 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md rounded-xl bg-white'>
          <img className='h-20' src={book} alt="" />
          <h1 className='font-bold tracking-tight mt-2 text-xl'>Drive Smart Handbook</h1>
          <p className='text-zinc-700' >Learn to drive smart with the official handbook</p>
          <a href="https://downloads.ctfassets.net/nnc41duedoho/63cHBOAVpOAQGOOMBFhFbL/0120c57c3c706956bd3e410e179642bd/driver-full.pdf" className="bg-blue-500 text-white mt-2 px-4 py-1 rounded-2xl">
            Learn Now
          </a>
        </div>
        <div className='w-72 h-60 py-4 justify-center flex flex-col items-center lg:w-80 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-md bg-white'>
          <img className='h-20' src={test} alt="" />
          <h1 className='font-bold tracking-tight mt-2 text-xl'>Knowledge Test</h1>
          <p className='text-zinc-700'>Take the knowledge test to prepare for driving</p>
          <a href="https://practicetest.icbc.com/#/" className="bg-blue-500 text-white mt-2 px-4 py-1 rounded-2xl">
            Take Test
          </a>
        </div>
      </div>
      <div className=' pb-20 text-center gap-6 md:gap-2 lg:gap-10 px-6 flex flex-col md:flex-row items-center justify-center'>
        <div className='w-72 h-60 py-4 justify-center flex flex-col items-center lg:w-80 hover:scale-105 transition-transform duration-300 ease-in-out  shadow-md rounded-xl bg-white'>
          <img className='h-20' src={sign} alt="" />
          <h1 className='font-bold tracking-tight mt-2 text-xl'>Road Signs</h1>
          <p className='text-zinc-700'>Test your knowledge of road signs.</p>
          <a href="https://practicetest.icbc.com/#/signs" className="bg-blue-500 text-white mt-2 px-4 py-1 rounded-2xl">
           Take Test
          </a>
        </div>
        <div className='w-72 h-60 justify-center  py-4  flex flex-col items-center lg:w-80 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md   rounded-xl bg-white'>
          <img className='h-20' src={safety} alt="" />
          <h1 className='font-bold tracking-tight mt-2 text-xl'>Road Safety</h1>
          <p className='text-zinc-700' >Download the Street Sense road safety guide.</p>
          <a href="https://www.icbc.com/road-safety/crashes-happen/street-sense" className="bg-blue-500 text-white mt-2 px-4 py-1 rounded-2xl">
            Download Now
          </a>
        </div>
        
      </div>




      

      


      






    </div>
  )
}

export default Resources