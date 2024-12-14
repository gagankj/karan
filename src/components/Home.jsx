import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import heroVideo from "../assets/hero.mp4"
import why from "../assets/whyUs.png"

function Home() {

  const [headline, setHeadline] = useState(false);
  const [subheadline, setsubHeadline] = useState(false);
  const [button, setbutton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeadline(true);
    }, 500); // Change 3000 to the number of milliseconds you want to wait

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setbutton(true);
    }, 1000); // Change 3000 to the number of milliseconds you want to wait

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setsubHeadline(true);
    }, 750); // Change 3000 to the number of milliseconds you want to wait

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  

  return (
    <div className="flex overflow-hidden flex-col items-center pt-20  bg-[#D4EBF8]">
      
      <div className="flex relative w-screen   flex-col items-start px-20  py-72    max-md:px-5 max-md:py-44 max-md:max-w-full">
      
      <video 
    className="absolute top-0 left-0 w-full h-screen object-cover"
    src={heroVideo}
    autoPlay 
    loop 
    muted 
    >
  </video>
        <div className={` transition-opacity duration-1000 ${headline ? 'opacity-100' : 'opacity-0'} relative w-full text-center  text-8xl font-semibold tracking-tight text-white max-md:max-w-full max-md:text-7xl`}>
          <span className="font-semibold">Master the Art of Driving </span>
          
        </div>
        <div className={`transition-opacity duration-1000 ${subheadline ? 'opacity-100' : 'opacity-0'} relative w-full text-center mt-6 text-3xl tracking-tight text-white max-md:max-w-full`}>
          Learn Safe and Confident Driving from Experts
        </div>
        <div className={` transition-opacity duration-1000 ${button ? 'opacity-100' : 'opacity-0'}  md:gap-4 w-full mt-4 flex flex-col  items-center md:flex-row justify-center`}>
        <NavLink to="/about">

        <div className="group  relative  tracking-tighter cursor-pointer mt-4 p-2 w-32  bg-white rounded-full overflow-hidden text-black text-center font-medium">
        <span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          Explore
        </span>
        <div className="flex gap-2 text-xl text-blue-500 bg-white z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
          <span>Explore</span>
        </div>
      </div>
        </NavLink>
        <NavLink to="/contact">

        <div className="group  relative tracking-tighter cursor-pointer mt-4 p-2 w-32  bg-blue-500 rounded-full overflow-hidden text-white text-center font-medium">
        <span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          Contact
        </span>
        <div className="flex gap-2 text-xl text-blue-500 bg-white z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
          <span>Contact</span>
        </div>
      </div>
        </NavLink>
        </div>

      </div>
      <div className="mt-40 md:mt-52 text-4xl tracking-tighter text-zinc-700 ">
        Welcome to
      </div>
      <div className="text-5xl md:text-6xl  lg:text-8xl mt-2 font-bold text-center tracking-tighter text-black ">
        Karan Driving School
      </div>
      
      <div className="md:mt-14 w-full px-6 md:px-10 lg:px-14  max-w-[1486px]  max-md:max-w-full">
        <div className="flex gap-5 lg:flex-row flex-col-reverse">
          <div className="flex flex-col px-2 lg:w-1/2 max-md:ml-0 max-md:w-full">
            <div className="   w-full md:pt-10 lg:pt-0  text-xl   tracking-tight   text-zinc-700
            max-md:mt-4  max-md:max-w-full max-md:text-xl max-md:leading-[30px]">
              Welcome to Karan Driving School, your trusted partner on the journey to safe and confident driving. Our mission is to provide exceptional driving education that not only equips you with the skills to navigate the road but also instills a lifelong commitment to safety and responsibility. With our team of experienced, patient instructors and tailored training programs, we create a supportive environment where every learner thrives. Whether you’re a beginner or seeking to enhance your skills, we’re here to guide you every step of the way. Join us at Karan Driving School and take the wheel with confidence and purpose.
            </div>
      <NavLink className="flex justify-center mt-10 md:justify-start" to="/about">

<div className="group relative tracking-tight cursor-pointer  py-3 w-48  bg-blue-500 rounded-full overflow-hidden text-white  text-center font-medium">
<span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
  More About Us
</span>
<div className="flex gap-2 text-xl text-white bg-blue-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
  <span>More About Us</span>
</div>
</div>
</NavLink>
          </div>
          <div className="flex flex-col   w-full lg:w-1/2 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
              className="object-contain grow w-full rounded-xl aspect-[1.46] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>


      <div className="bg-[#0A3981] w-screen mt-14 md:mt-20 flex flex-col py-10 justify-center items-center lg:mt-28 px-6 md:px-12 h-[500px] lg:h-[600px]">

        <h1 className="text-white font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">Why Choose Us?</h1>

        <h3 className="text-white mt-2 text-center">Your Journey to Safe and Skilled Driving Starts Here</h3>

        <div className="w-4/5  md:items-start md:flex justify-center  lg:items-center gap-10 lg:justify-center my-10 h-[80%]">

        <div className="flex flex-col tracking-tight md:text-2xl  lg:text-2xl gap-4">
          <div className="text-white flex items-center  gap-4">
            <div>01</div>
            <div className="border rounded-full w-full  px-4 py-1">Expert Instructors</div>
          </div>
          <div className="text-white flex items-center gap-4">
            <div>02</div>
            <div className="bg-white text-zinc-700 rounded-full w-96 px-4 py-1">Inclusive Learning Environment</div>
          </div>
          <div className="text-white flex items-center gap-4">
            <div>03</div>
            <div className="border rounded-full w-96 px-4 py-1">Comprehensive Driving Lessons</div>
          </div>
          <div className="text-white flex items-center gap-4">
            <div>04</div>
            <div className="bg-white text-zinc-700 rounded-full w-96 px-4 py-1">Modern Training Fleet</div>
          </div>
          <div className="text-white flex items-center gap-4">
            <div>05</div>
            <div className="border rounded-full px-4 w-96 py-1">Flexible Scheduling</div>
          </div>
        </div>


        <div className="hidden lg:block">
          <img src={why} alt="" />
        </div>


        </div>


      </div>

      <div className='py-10 px-10 md:px-20'>


        <h1 className='text-4xl font-bold md:text-6xl tracking-tight text-center mb-6'>What We Offer?</h1>
        <p className='text-zinc-700'>We offer high-quality, personalized driving lessons to help you become a safe, confident driver. With a variety of driving packages and helpful resources, we provide the support you need to successfully obtain your driver’s license.</p>
        <div className='flex flex-col md:flex-row text-center lg:px-14 gap-10 lg:gap-14 py-10'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl lg:text-3xl font-bold tracking-tight mb-4'>Our Driving Packages</h1>
            <div className='bg-[#0A3981] p-6 rounded-xl lg:text-2xl lg:w-full transition-transform duration-300 ease-in-out hover:scale-105 w-80 md:w-72 text-white'>
              <p>We offer flexible driving packages for all skill levels, from beginner lessons to advanced sessions. Our certified instructors will ensure you're fully prepared, whether you're just starting or refreshing your skills.</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl lg:text-3xl font-bold tracking-tight mb-4'>Resources</h1>
            <div className='bg-[#0A3981] p-6 w-80 md:w-72 rounded-xl lg:text-2xl transition-transform duration-300 ease-in-out lg:w-full hover:scale-105 text-white'>
              <p>We provide key resources, including exam preparation, driving test booking assistance, and helpful links for the licensing process to make your journey to a driver’s license smooth and easy.</p>
            </div>
          </div>
          
        </div>


        
      </div>
      
      
      
      
      
      
      <div className="bg-white w-screen ">

      <div className="mt-16 text-7xl text-center font-bold tracking-tighter text-black max-md:mt-10 bg-white max-md:max-w-full max-md:text-4xl">
        What Our Students Say
      </div>
      <h2 className="text-2xl mt-4 text-center bg-white text-zinc-700">Driven to Succeed: Hear What Our Students Say About Us!</h2>

      <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
           

            

            <div className="relative mt-10 md:mt-24 md:order-2">
                <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                    <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{
                      background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                    }}></div>
                </div>

                <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                    <div className="flex hover:scale-105 transition-transform duration-300 rounded-xl ease-in-out  flex-col overflow-hidden shadow-xl">
                        <div className="flex flex-col justify-between flex-1 p-6  bg-white lg:py-8 lg:px-7">
                            <div className="flex-1">
                                <div className="flex justify-center items-center">
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                </div>

                                <blockquote className="flex-1 mt-8">
                                    <p className="text-lg leading-relaxed text-gray-900 font-pj">“I was so nervous to start driving, but the team at Karan Driving School put me at ease from day one. They went above and beyond to make sure I understood every aspect of driving. Thank you for helping me achieve my goal!”</p>
                                </blockquote>
                            </div>

                            <div className="flex justify-center items-center mt-8">
                                <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                <div className="ml-4">
                                    <p className="text-xl font-bold text-gray-900 font-pj">Jason T.</p>
                                    {/* <p className="mt-0.5 text-sm font-pj text-gray-600">Freelance React Developer</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex hover:scale-105 transition-transform duration-300 rounded-xl ease-in-out flex-col overflow-hidden shadow-xl">
                        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                            <div className="flex-1">
                                <div className="flex justify-center items-center">
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                </div>

                                <blockquote className="flex-1 mt-8">
                                    <p className="text-lg leading-relaxed text-gray-900 font-pj">“The flexible scheduling and personalized lessons were a game-changer for me. The instructors are supportive, and they genuinely care about your success. I’m now a confident driver thanks to Karan Driving School”</p>
                                </blockquote>
                            </div>

                            <div className="flex justify-center items-center mt-8">
                                <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                                <div className="ml-4 ">
                                    <p className="text-xl font-bold text-gray-900 font-pj">Amandeep S.</p>
                                    {/* <p className="mt-0.5 text-sm font-pj text-gray-600">Digital Marketer</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex hover:scale-105 transition-transform duration-300 ease-in-out  flex-col rounded-xl overflow-hidden shadow-xl">
                        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                            <div className="flex-1">
                                <div className="flex justify-center items-center">
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                    </svg>
                                </div>

                                <blockquote className="flex-1 mt-8">
                                    <p className="text-lg leading-relaxed text-gray-900 font-pj">“From the first lesson, I felt supported and encouraged. My instructor provided clear guidance and helpful tips that made all the difference. If you’re looking for a driving school that prioritizes your success, this is it.”</p>
                                </blockquote>
                            </div>

                            <div className="flex justify-center items-center mt-8">
                                <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                                <div className="ml-4">
                                    <p className="text-xl font-bold text-gray-900 font-pj">Ravi D.</p>
                                    {/* <p className="mt-0.5 text-sm font-pj text-gray-600">Graphic Designer</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
                                            </div>

      
      

      
      
    </div>
  );
}

export default Home