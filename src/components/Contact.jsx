import React from 'react'
import call from "../assets/call.gif"

import mail from "../assets/mail.gif"

const Contact = () => {
  return (
    <div className='pt-20 bg-[#D4EBF8]'>

<div className="w-screen h-44  text-center py-10 text-white bg-[#0A3981]">
        <h1 className='text-4xl   font-bold mb-2 px-2  md:text-5xl lg:text-7xl'>Get in Touch with us</h1>
        
        <h1 className='lg:text-xl px-4' >We're here to help with all your driving education needs.</h1>
      </div>


      <div className='py-10 flex flex-col lg:flex-row gap-10 items-center justify-center'>

        <div className='flex flex-col items-center'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-[#0A3981]'>Contact Details</h1>
          <div className='bg-white w-96 flex flex-col gap-4 rounded-xl py-4 px-2'>
            <span className=''><img className='h-16 inline mr-2' src={call} alt="" />
            <a    className='text-xl font-bold tracking-tight' href="tel:7788460018">7788460018</a>
            </span>
            <span><img className='h-16 mr-2 inline' src={mail} alt="" />
            <a className='text-lg font-bold tracking-tight' href="mailto:karandrivingschoolltd@gmail.com">karandrivingschoolltd@gmail.com</a>
            </span>
            
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-[#0A3981]'>Operating Hours</h1>
          <div className='bg-white w-96 h-40 lg:h-44 px-10 flex flex-col justify-center items-center gap-4 rounded-xl py-4 '>

            <div className=' w-full gap-6 flex'>
              <h1 className=' w-36 font-bold'>
              Monday to Friday 
                
                </h1>
            <span className='text-blue-500 font-bold'>9 AM - 6 PM</span>
                </div>
            <div className=' w-full gap-6 flex'>
              <h1 className='w-36 font-bold '>
              Saturday
                
                </h1>
            <span className='text-blue-500 font-bold'>10 AM - 4 PM</span>
                </div>
            <div className=' w-full gap-6 flex'>
              <h1 className='w-36 font-bold'>
              Sunday 
                
                </h1>
            <span className='text-red-500 font-bold'>CLOSED</span>
                </div>
            

          </div>
        </div>
      </div>

      <h1 className='text-3xl tracking-tight py-10 text-center font-bold text-[#0A3981]'>Send Us a Message</h1>

<div className='flex justify-center pb-20 '>

      <iframe className='w-[310px] h-[600px] md:w-[500px] lg:w-2/3' src="https://docs.google.com/forms/d/e/1FAIpQLSc6bGaRrdbVuaNbysBy7zGUwAx3tdTmXX7-FL0ikFylt3ZLkA/viewform?embedded=true"   >Loading…</iframe>
</div>








    </div>
  )
}

export default Contact