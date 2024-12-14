import React from 'react'
import logo from "../assets/logo.png"
import mission from "../assets/mission.gif"
import vision from "../assets/vision.gif"
import why from "../assets/whyUs.png"








const About = () => {
  return (
    <div className='pt-20 tracking-tight bg-[#D4EBF8]'>
      <div className="w-screen h-44  text-center py-10 text-white bg-[#0A3981]">
        <h1 className='text-5xl font-bold mb-2 md:text-6xl lg:text-7xl'>About Us</h1>
        <h1>Empowering Safe, Confident Drivers for Life</h1>
      </div>

      <div className='px-10 py-10 lg:px-20 '>


      <h1 className='text-center text-xl'>Welcome to</h1>
      <h1 className='text-center text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight'>Karan Driving School</h1>

      <div className='flex lg:px-32 text-zinc-700 mt-4 flex-col-reverse gap-6 items-center lg:items-start
      lg:text-2xl lg:mt-10 tracking-tight md:flex-row'>
        <p className='lg:pt-6 text-xl'>Looking for a reliable driving school in Metro Vancouver? Karan Driving School offers top-quality lessons to help you build the skills, confidence, and knowledge to drive safely and responsibly.

As a proud part of the Metro Vancouver community, we provide personalized instruction for all skill levels—whether you’re a beginner or looking to refine advanced techniques. Our certified instructors are committed to professionalism, patience, and community service, ensuring you get the best learning experience.

Join us today and see why Karan Driving School is Metro Vancouver’s trusted choice for driving education. Let’s hit the road to safety and confidence together!</p>

        <img className='w-44 h-32 lg:w-80 lg:h-64' src={logo} alt="" />

      </div>
    
      </div>

      <div className='w-screen  md:px-10 py-10 justify-center items-center  flex flex-col gap-8 lg:gap-14 lg:flex-row bg-[#0A3981]'>

        <div className='bg-white hover:scale-105 transition-transform duration-300 ease-in-out w-80 md:h-[380px] md:w-[600px] flex flex-col items-center rounded-xl h-[450px]'>
          <img className='h-32' src={mission} alt="" />

          <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight mt-2 text-[#0A3981]'>Mission</h1>
          <p className=' my-2  md:text-xl px-6 text-zinc-700'>Our mission is to deliver high-quality, personalized driving lessons designed to empower individuals with the skills, confidence, and responsibility to drive safely. We are committed to promoting road safety and enhancing the well-being of the Metro Vancouver community through professional instruction and a focus on lifelong safe driving habits.</p>
          
          
          


        </div>

        <div className='bg-white hover:scale-105 transition-transform duration-300 ease-in-out w-80 md:h-[380px] md:w-[600px] flex flex-col items-center rounded-xl h-[450px]'>
          <img className='h-32' src={vision} alt="" />
          <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight mt-2 text-[#0A3981]'>Vision</h1>
          <p className=' my-2 md:text-xl px-6  text-zinc-700'>Our vision is to be the top choice for a driving school in Metro Vancouver, recognized for shaping confident and responsible drivers who prioritize road safety. Through our dedication to education excellence and community engagement, we strive to set the benchmark for superior driving instruction and safety awareness across the region.</p>

        </div>
      </div>

      <div className=" w-screen md:mt-4  flex flex-col py-10 justify-center items-center   px-6 md:px-12 ">

        <h1 className="text-black font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">Why Choose Us?</h1>

        <h3 className="text-zinc-700 mt-2 text-center">Your Journey to Safe and Skilled Driving Starts Here</h3>

        <div className="w-4/5  md:items-start md:flex justify-center  lg:items-center gap-10 lg:justify-center my-10 h-[80%]">

        <div className="flex flex-col tracking-tight md:text-2xl  lg:text-2xl gap-4">
          <div className="text-black flex items-center   gap-4">
            <div>01</div>
            <div className="bg-[#0A3981] text-white rounded-full w-full  px-4 py-2">Expert Instructors</div>
          </div>
          <div className="text-black flex items-center gap-4">
            <div>02</div>
            <div className="bg-white text-zinc-700 rounded-full w-96 px-4 py-2">Inclusive Learning Environment</div>
          </div>
          <div className="ttext-black flex items-center gap-4">
            <div>03</div>
            <div className="bg-[#0A3981] text-white rounded-full w-96 px-4 py-2">Comprehensive Driving Lessons</div>
          </div>
          <div className="text-black flex items-center gap-4">
            <div>04</div>
            <div className="bg-white text-zinc-700 rounded-full w-96 px-4 py-2">Modern Training Fleet</div>
          </div>
          <div className="text-black flex items-center gap-4">
            <div>05</div>
            <div className="bg-[#0A3981] text-white rounded-full px-4 w-96 py-2">Flexible Scheduling</div>
          </div>
        </div>


        <div className="hidden lg:block">
          <img src={why} alt="" />
        </div>


        </div>


      </div>


      <div className='px-10  lg:px-44 pb-10 text-center'>
        <h1 className='text-4xl font-bold tracking-tight lg:text-6xl'>Our Commitment to Road Safety</h1>

        <h1 className='text-xl text-zinc-700 my-2'>Safety is at the heart of our training.</h1>

        <div className='flex flex-col items-center justify-center mt-4 text-white font-bold md:flex-row gap-4 lg:gap-10 '>
          <div className='w-60 h-32 flex items-center hover:scale-105 transition-transform duration-300 ease-in-out py-4 px-4 rounded-lg bg-[#0A3981]'>
            <h1 className='text-2xl'>Traffic Rules and Regulations</h1>
          </div>
          <div className='w-60 h-32  hover:scale-105 transition-transform duration-300 ease-in-out py-4 px-4 rounded-lg  bg-[#0A3981]'>
            <h1 className='text-2xl'>Emergency Handling Techniques</h1>
          </div>
          <div className='w-60 h-32 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center py-4 px-4 rounded-lg  bg-[#0A3981]'>
            <h1 className='text-2xl'>Defensive Driving Practices</h1>
          </div>
        </div>

        <h1 className='mt-6'>By choosing Karan Driving School, you’ll develop not just the skills to pass your driving test but the mindset to drive safely for life.</h1>
      </div>


      <div className='px-10  lg:px-44 bg-[#0A3981] py-10 text-center'>
        <h1 className='text-4xl font-bold text-white tracking-tight lg:text-6xl'>Who We Serve</h1>

        <h1 className='text-xl text-white my-2'>We proudly serve students in Lower Mainland and surrounding areas, including:</h1>

        <div className='flex flex-col items-center justify-center mt-4 text-white font-bold md:flex-row gap-4 lg:gap-10 '>
          <div className='w-60 h-36 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center py-4 px-4 rounded-lg bg-white'>
            <h1 className='text-2xl text-zinc-700'>Teenagers Preparing for Their First License</h1>
          </div>
          <div className='w-60 h-36 hover:scale-105 transition-transform duration-300 ease-in-out   py-4 px-4 flex items-center rounded-lg  bg-white'>
            <h1 className='text-2xl text-zinc-700'>Adult Learners Starting Fresh</h1>
          </div>
          <div className='w-60 h-36 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center   py-4 px-4 rounded-lg  bg-white'>
            <h1 className='text-2xl text-zinc-700'>Drivers Looking to Regain Confidence</h1>
          </div>
        </div>

        <h1 className='mt-6 text-white'>By choosing Karan Driving School, you’ll develop not just the skills to pass your driving test but the mindset to drive safely for life.</h1>
      </div>





    </div>
  )
}

export default About