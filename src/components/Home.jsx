import * as React from "react";
import video from "../assets/hero-video.mp4"


function Home() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-16  bg-zinc-50">
      
      <div className="flex relative  flex-col items-start px-20 bg-hero bg-center bg-cover py-96  w-full   max-md:px-5 max-md:py-24 max-md:max-w-full">
      

        <div className="relative text-8xl font-semibold tracking-tighter text-white max-md:max-w-full max-md:text-4xl">
          <span className="font-bold">Master the Art of Driving </span>
          
        </div>
        <div className="relative text-3xl tracking-tighter text-white max-md:max-w-full">
          Learn Safe and Confident Driving from Experts
        </div>
        <div className="group relative cursor-pointer mt-4 p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
        <span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          Explore
        </span>
        <div className="flex gap-2 text-xl text-white bg-blue-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
          <span>Explore</span>
        </div>
      </div>
      </div>
      <div className="mt-28 text-4xl tracking-tighter text-neutral-700 max-md:mt-10">
        Welcome to
      </div>
      <div className="text-8xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
        Karan Driving School
      </div>
      <div className="flex shrink-0 mt-4 max-w-full h-1.5 bg-sky-500 rounded-3xl w-[721px]" />
      <div className="mt-20 w-full max-w-[1486px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-10 pt-7 pb-14 w-full text-3xl tracking-tighter text-justify rounded-2xl  border-neutral-400 leading-[58px] text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
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
      <div className="flex gap-6 py-3   mt-16 max-w-full text-3xl text-white bg-blue-500 rounded-[93px] w-[300px] max-md:pl-5 max-md:mt-10">
        <div className="flex-auto text-center">More About us</div>
        
      </div>
      <div className="mt-40  text-8xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Why Drive with Us?
      </div>
      <div className="flex  shrink-0 mt-3.5 max-w-full h-1.5 bg-red-600 rounded-[31px] w-[779px]" />
      <div className="mt-7  text-4xl tracking-tighter text-neutral-700 max-md:max-w-full">
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
      <div className="mt-72 text-8xl font-bold tracking-tighter text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Our Courses
      </div>
      <div className="flex shrink-0 max-w-full h-1.5 bg-sky-500 rounded-3xl w-[721px]" />
      <div className="text-4xl tracking-tighter text-neutral-700 max-md:max-w-full">
        From beginners to advanced drivers, find the right course for you
      </div>
      <div className="mt-16 w-full max-w-[1396px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-3 pt-2.5 pb-28 w-full text-black rounded-xl bg-zinc-100 max-md:pb-24 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f0cc9f4f5b4ee92d40aa4540526f0246e0d575ac31b2306b0d530dd82819905?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                className="object-contain self-stretch w-full rounded-xl aspect-[1.92]"
              />
              <div className="mt-5 text-4xl tracking-tighter">
                Beginner’s Course
              </div>
              <div className="mt-2 text-2xl tracking-tighter text-neutral-700">
                Learn the essentials and get comfortable on the road.
              </div>
              <div className="px-4 py-1 mt-1.5 w-24 text-base tracking-tighter bg-white rounded-md max-md:pr-5">
                Explore{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3.5 pt-2.5 pb-28 w-full text-black rounded-xl bg-zinc-100 max-md:pb-24 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97cf74d9918cdf9c76ed1a6d5f84f60f5c766492783cb12b1db89e65ef4d9e51?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                className="object-contain w-full rounded-xl aspect-[1.86]"
              />
              <div className="self-start mt-3.5 text-4xl tracking-tighter">
                Advanced Course
              </div>
              <div className="mt-2 mr-5 text-2xl tracking-tighter text-neutral-700 max-md:mr-2.5">
                Master advanced skills for safe and efficient driving.
              </div>
              <div className="self-start px-5 py-1 mt-2 text-base tracking-tighter bg-white rounded-md max-md:px-5">
                Explore{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-3.5 pt-2.5 pb-24 w-full text-black rounded-xl bg-zinc-100 max-md:pb-24 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1618b0c013124c4e83a6358239b820198f1811d8899682e80133c61168b3848?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                className="object-contain self-stretch w-full rounded-xl aspect-[1.86]"
              />
              <div className="mt-6 text-4xl tracking-tighter">
                Defensive Course
              </div>
              <div className="mt-2 text-2xl tracking-tighter text-neutral-700">
                Learn to predict and respond to potential hazards on the road.
              </div>
              <div className="px-4 py-1 mt-2 w-24 text-base tracking-tighter bg-white rounded-md max-md:pr-5">
                Explore{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-1.5 mt-16 max-w-full text-5xl tracking-tighter text-white bg-sky-500 rounded-2xl w-[465px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
        Explore all Courses
      </div>
      <div className="mt-16 ml-8 text-8xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        What Our Students Say
      </div>
      <div className="mt-20 max-w-full w-[996px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow pt-1 pr-5 pb-2.5 w-full rounded-lg bg-zinc-100 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                    className="object-contain shrink-0 max-w-full aspect-square w-[109px] max-md:mt-3.5"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start mt-2 max-md:mt-5">
                    <div className="text-lg font-bold tracking-tighter text-black">
                      Alexandra B., New York
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c1af529988b7ac064ee6152b6a13273adb6392b64e440f6e60169b94c3343ba?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                      className="object-contain mt-1 aspect-[5.46] w-[93px]"
                    />
                    <div className="self-stretch mt-3.5 text-base tracking-tight text-neutral-700">
                      The instructors were patient and professional, making me
                      feel at ease on the road.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow pt-1 pr-5 pb-2.5 w-full rounded-lg bg-zinc-100 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2de3fa5ea7eae682c9fd09e18e830bd424c1bfe6b9833ad8586dbcae239f915?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                    className="object-contain shrink-0 max-w-full aspect-square w-[109px] max-md:mt-3.5"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start mt-2 max-md:mt-5">
                    <div className="text-lg font-bold tracking-tighter text-black">
                      Alexandra B., New York
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1b037dceb005feff89669e6b0c8a7d1456b9b2a935361e52395f9088e89b3e5?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                      className="object-contain mt-1 aspect-[5.46] w-[93px]"
                    />
                    <div className="self-stretch mt-3.5 text-base tracking-tight text-neutral-700">
                      The instructors were patient and professional, making me
                      feel at ease on the road.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36 ml-2.5 text-8xl font-bold tracking-tighter text-black max-md:mt-10 max-md:text-4xl">
        Visit Us
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb37f46a3b1bea8a0ce8bbb6d9cbd35d95c5313ac8f579f0ef36e1470b96bb?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
        className="object-contain mt-11 ml-7 w-full rounded-3xl aspect-[2.1] max-w-[1580px] max-md:mt-10 max-md:max-w-full"
      />
      
    </div>
  );
}

export default Home