import * as React from "react";

function About() {
  return (
    <div className="flex overflow-hidden flex-col pt-16 bg-zinc-50">
      
      <div className="flex relative flex-col justify-center items-center px-20 py-14 w-full min-h-[273px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3663851d1aff66d9978c1c217ddf39795a623986f9d7a0b0c807ea0801b84d31?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full w-[641px]">
          <div className="self-center text-center text-8xl font-bold  text-white max-md:text-4xl">
            About Us
          </div>
          <div className="mt-2 text-3xl  text-center text-zinc-100 max-md:max-w-full">
            Empowering Safe, Confident Drivers for Life
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-24 w-full max-w-[1515px] max-md:mt-10 max-md:max-w-full">
        <div className="text-8xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
          Welcome to Karan Driving School
        </div>
        <div className="self-start mt-20 text-4xl tracking-tighter text-justify text-neutral-700 w-[804px] max-md:mt-10 max-md:max-w-full">
          At [Driving School Name], we’re dedicated to developing confident and
          responsible drivers. With over a decade of experience, we strive to
          deliver driver education that goes beyond the basics, creating
          lifelong safe driving habits.
        </div>
        <div className="mt-32 text-8xl tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Our Mission & Vision
        </div>
        <div className="mt-16 max-w-full w-[1146px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-11 py-28 w-full rounded-2xl bg-zinc-300 bg-opacity-30 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-8xl tracking-tighter text-black max-md:text-4xl">
                  Mission
                </div>
                <div className="text-4xl tracking-tighter text-neutral-700">
                  To instill safe driving habits and prepare students for a
                  lifetime of responsible driving.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-11 py-28 w-full rounded-2xl bg-zinc-300 bg-opacity-30 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-8xl tracking-tighter text-black max-md:text-4xl">
                  Vision
                </div>
                <div className="text-4xl tracking-tighter text-neutral-700">
                To be a trusted leader in driver education, shaping safe drivers
                for a safer community.
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            
              <div className="grow px-14 pt-48 pb-32 w-full text-4xl tracking-tighter rounded-2xl bg-zinc-300 bg-opacity-30 text-neutral-700 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
              
                To be a trusted leader in driver education, shaping safe drivers
                for a safer community.
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-16 ml-12 text-8xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Why Choose Us?
        </div>
        <div className="mt-14 ml-16 text-3xl tracking-tighter text-black max-md:mt-10 max-md:max-w-full">
          this area is too be implemented in moving or static jump over pages.
        </div>
        <div className="self-end mt-14 w-full max-w-[1403px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-36 pb-16 pl-6 w-full text-black rounded-lg bg-zinc-300 bg-opacity-70 max-md:pt-24 max-md:mt-10">
                <div className="text-4xl font-bold tracking-tighter w-[388px]">
                  Experienced Instructors
                </div>
                <div className="mt-5 text-2xl tracking-tighter">
                  Our certified team brings decades of experience to help you
                  succeed.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start py-20 pr-20 pl-6 w-full text-black rounded-md bg-zinc-300 bg-opacity-70 max-md:px-5 max-md:pt-24 max-md:mt-10">
                <div className="text-3xl font-bold tracking-tighter max-md:ml-2.5">
                  Experienced Instructors
                </div>
                <div className="mt-11 text-2xl tracking-tighter max-md:mt-10">
                  Our certified team brings decades of experience to help you
                  succeed.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start py-20 pr-20 pl-6 w-full text-black rounded-md bg-zinc-300 bg-opacity-70 max-md:px-5 max-md:pt-24 max-md:mt-10">
                <div className="text-3xl font-bold tracking-tighter max-md:ml-2">
                  Experienced Instructors
                </div>
                <div className="mt-11 text-2xl tracking-tighter max-md:mt-10">
                  Our certified team brings decades of experience to help you
                  succeed.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-80 text-8xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Our Safety Promise
        </div>
        <div className="self-start mt-20 ml-20 text-5xl tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Cars equipped with dual controls for secure learning.”
          <br />
          “Sanitized and well-maintained vehicles.”
          <br />
          “Certified instructors trained in safety and first aid.”
        </div>
      </div>
      <div className="flex flex-col px-px mt-72 w-full font-bold text-center bg-zinc-700 bg-opacity-30 max-md:mt-10 max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center px-20 py-16 min-h-0 max-w-[1928px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efb74da8d4bb67aec3a3347dd4c41815073441754cd7e59e578e4a70d422715?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col items-center max-w-full w-[949px]">
            <div className="self-stretch text-8xl tracking-tighter text-white max-md:max-w-full max-md:text-4xl">
              Ready to start driving?
              <br />
              <br />
            </div>
            <div className="mt-9 text-5xl tracking-tighter text-zinc-100 max-md:max-w-full max-md:text-4xl">
              Join [Driving School Name] today!
            </div>
            <div className="px-12 pt-3 pb-5 mt-24 max-w-full text-6xl tracking-tighter text-black bg-white rounded-2xl w-[467px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
              Sign Up Now
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default About