import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";



function Home() {
  

  return (
    <div className="flex overflow-hidden flex-col items-center pt-20  bg-zinc-50">
      
      <div className="flex relative w-screen   flex-col items-start px-20 bg-hero bg-center bg-cover py-96    max-md:px-5 max-md:py-24 max-md:max-w-full">
      

        <div className="relative w-full text-center text-8xl font-semibold tracking-tight text-white max-md:max-w-full max-md:text-4xl">
          <span className="font-semibold">Master the Art of Driving </span>
          
        </div>
        <div className="relative w-full text-center text-3xl tracking-tight text-white max-md:max-w-full">
          Learn Safe and Confident Driving from Experts
        </div>
        <NavLink to="/about">
        <div className=" w-screen flex justify-center pr-10 md:pr-36">

        <div className="group  relative tracking-tighter cursor-pointer mt-4 p-2 w-32  bg-white rounded-full overflow-hidden text-black text-center font-medium">
        <span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          Explore
        </span>
        <div className="flex gap-2 text-xl text-blue-500 bg-white z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
          <span>Explore</span>
        </div>
      </div>
        </div>
        </NavLink>

      </div>
      <div className="mt-20 text-4xl tracking-tighter text-neutral-700 max-md:mt-10">
        Welcome to
      </div>
      <div className="text-7xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
        Karan Driving School
      </div>
      <div className="flex shrink-0 mt-4 max-w-full h-1.5 bg-sky-500 rounded-3xl w-[300px]" />
      <div className="mt-20 w-full max-w-[1486px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-10 pt-7 pb-14 w-full text-3xl tracking-tight text-justify rounded-2xl  border-neutral-400 leading-[58px] text-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-xl max-md:leading-[30px]">
              Our mission is to turn every learner into a confident driver with
              personalized lessons and expert guidance. Whether you’re a
              beginner or brushing up your skills, we’re here to help!
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd7307bf5a6829eae5ea4f19579ad95147b53d133ea97635cfc0923530eb8a7?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
              className="object-contain grow w-full rounded-xl aspect-[1.46] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <NavLink to="/about">

<div className="group relative tracking-tight cursor-pointer mt-20 py-3 w-48  bg-blue-500 rounded-full overflow-hidden text-white text-center font-medium">
<span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
  More About Us
</span>
<div className="flex gap-2 text-xl text-white bg-blue-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
  <span>More About Us</span>
</div>
</div>
</NavLink>
      <div className="mt-32  text-7xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Why Drive with Us?
      </div>
      <div className="flex  shrink-0 mt-3.5 max-w-full h-1.5 bg-red-600 rounded-[31px] w-[600px]" />
      <div className="mt-7  text-2xl tracking-tight text-neutral-700 max-md:max-w-full">
        Your Journey to Safe and Skilled Driving Starts Here
      </div>
      <div className="mt-24 w-full  max-w-[1309px] max-md:mt-10 max-md:max-w-full">
        <div className="flex   gap-5 max-md:flex-col">
          <div className="flex  flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-5 pb-44 w-full rounded-2xl aspect-[0.712] max-md:px-5 max-md:pb-24 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e16addfe29c3ed21133112f019a6a52772834062196e1b688b501a7da17af24?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative gap-5 justify-between items-start text-8xl font-bold tracking-tighter text-right whitespace-nowrap text-zinc-300 max-md:text-4xl">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d1f53fd5f989f0cb742bf15f28abdd7002b079d8b804738b2e9d6a50f7bb62?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                  className="object-contain shrink-0 mt-3 max-w-full aspect-[1.08] w-[113px]"
                />
                <div className="max-md:text-4xl">01</div>
              </div>
              <div className="relative mt-7 text-4xl font-medium tracking-tighter text-neutral-700">
                Experienced <br />
                Instructors
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-7 pt-5 pb-44 mx-auto w-full whitespace-nowrap rounded-xl bg-gray-200 bg-opacity-50 max-md:px-5 max-md:pb-24 max-md:mt-10">
              <div className="flex gap-5 justify-between items-start text-8xl font-bold tracking-tighter text-right text-zinc-300 max-md:text-4xl">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab5bb55a60e36a563fd5c577f8de505a8abd29704484c5029d8fdecc2a0e565b?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                  className="object-contain shrink-0 mt-1.5 aspect-[1.09] w-[87px]"
                />
                <div className="max-md:text-4xl">02</div>
              </div>
              <div className="mt-16 text-4xl font-medium tracking-tighter text-neutral-700 max-md:mt-10">
                Flexible
                <br />
                Scheduling
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-7 pt-5 pb-44 mx-auto w-full whitespace-nowrap rounded-xl bg-gray-200 bg-opacity-50 max-md:px-5 max-md:pb-24 max-md:mt-10">
              <div className="flex gap-5 justify-between items-start text-8xl font-bold tracking-tighter text-right text-zinc-300 max-md:text-4xl">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bca5ac1dea7e8506100b68f7cf4f22d950d59c6309569e702c1e477ddca5a97?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                  className="object-contain shrink-0 mt-4 aspect-[1.08] w-[79px]"
                />
                <div className="max-md:text-4xl">03</div>
              </div>
              <div className="mt-14 text-4xl font-medium tracking-tighter text-neutral-700 max-md:mt-10">
                Affordable
                <br />
                Pricing
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-7 pt-4 pb-44 mx-auto w-full whitespace-nowrap rounded-xl bg-gray-200 bg-opacity-50 max-md:pb-24 max-md:pl-5 max-md:mt-10">
              <div className="flex gap-10 items-start text-8xl font-bold tracking-tighter text-right text-zinc-300 max-md:mr-0.5 max-md:text-4xl">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df29dcba382202278db258d05ed0656c38a9531df24335b43163e2842e1a1be?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                  className="object-contain shrink-0 mt-2.5 max-w-full aspect-[1.15] w-[102px]"
                />
                <div className="grow shrink w-[87px] max-md:text-4xl">04</div>
              </div>
              <div className="mt-12 text-4xl font-medium tracking-tighter text-neutral-700 max-md:mt-10">
                Safety-Focused
                <br />
                Training
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      <div className="mt-16 ml-8 text-7xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        What Our Students Say
      </div>
      <h2 className="text-2xl mt-4 text-zinc-700">Driven to Succeed: Hear What Our Students Say About Us!</h2>

      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
           

            

            <div className="relative mt-10 md:mt-24 md:order-2">
                <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                    <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{
    background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
}}></div>
                </div>

                <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                    <div className="flex flex-col overflow-hidden shadow-xl">
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

                    <div className="flex flex-col overflow-hidden shadow-xl">
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

                    <div className="flex flex-col overflow-hidden shadow-xl">
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

      
      
<div className=" text-center flex flex-col items-center py-16">
      <h2 className="text-[#121212] tracking-tight text-5xl font-bold mb-4">Ready to drive with us?</h2>
      <p className="text-zinc-700 text-xl mb-6">Join Karan Driving School today!</p>
      <NavLink to="/register">

      <div className="group relative tracking-tight cursor-pointer mt-4 py-3 w-48  bg-blue-500 rounded-full overflow-hidden text-white text-center font-medium">
      <span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
        Register Now
      </span>
      <div className="flex gap-2 text-xl text-white bg-blue-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
        <span>Register Now</span>
      </div>
      </div>
</NavLink>
    </div>
      
      
    </div>
  );
}

export default Home