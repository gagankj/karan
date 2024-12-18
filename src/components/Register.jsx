import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className='pt-20'>


        <div className="w-screen h-44  text-center py-10 md:py-8 text-white bg-[#0A3981]">
        <h1 className='text-4xl hidden md:block font-bold mb-2 px-2  md:text-5xl lg:text-7xl'>Start Your Driving Journey Today!</h1>
        <h1 className='text-5xl  md:hidden font-bold mb-2 '>Register Now</h1>
        <h1 className='lg:text-xl px-4' >Explore Our Comprehensive Driving Resources to Help You Become a Skilled and Safe Driver.</h1>
        </div>

        <h1 className='text-white px-6 text-2xl text-center bg-[#0A3981] py-6'>
          <NavLink to="/contact" className="italic underline">
          Contact us 

          </NavLink>
          (Prefered Way) or fill this FORM to book your Driving Session Now!!
        </h1>

        <div className='bg-registerm bg-cover bg-center py-20 md:bg-register flex flex-col items-center justify-center'>

       


        <iframe className='h-[600px] md:w-2/3' src="https://docs.google.com/forms/d/e/1FAIpQLSckzm4sdySYNq1MHCwlfrIwPPgAEaAFt5lGSUDKMZ0lXLJ3Qg/viewform?embedded=true"  >Loading…</iframe>
        </div>
        




    </div>
  )
}

export default Register