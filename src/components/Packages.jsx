import * as React from "react";

function Packages() {
  return (
    <div className="flex overflow-hidden pt-16 flex-col bg-zinc-50">
      
      <div className="flex relative flex-col justify-center items-center px-20 py-10 w-full min-h-[364px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col w-full max-w-[1475px] max-md:max-w-full">
          <div className="text-8xl font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
            Choose the Right Package for Your Driving Journey
          </div>
          <div className="self-center mt-7 text-4xl tracking-tighter text-zinc-100 max-md:max-w-full">
            Flexible packages designed to meet your unique needs and budget.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-10 w-full max-w-[1498px] max-md:max-w-full">
        <div className="text-4xl tracking-tighter text-black max-md:max-w-full">
          What’s Included in Our Packages
        </div>
        <div className="mt-20 max-w-full w-[1195px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-8 py-9 w-full text-4xl tracking-tighter text-black rounded-2xl border border-solid bg-emerald-100 bg-opacity-40 border-neutral-400 border-opacity-90 max-md:pl-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0799b7cdaa59463ae22d4ae33951f7262a78100ed22598f8b47cc56f0896ea90?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                  className="object-contain self-center aspect-square w-[91px]"
                />
                <div className="mt-11 max-md:mt-10">Certified Instructors</div>
                <div className="mt-16 max-md:mt-10">
                  Professional, patient, and experienced instructors.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start pt-8 pr-16 pb-16 pl-8 w-full text-4xl tracking-tighter text-black rounded-2xl border border-solid bg-cyan-100 bg-opacity-40 border-neutral-400 border-opacity-90 max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2b9ba6dbf52a862eb9e0e637a65bbe03c173684f21a99af12248bdcb49fbd92?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                  className="object-contain self-center aspect-square w-[91px]"
                />
                <div className="mt-9 w-[268px]">Flexible Scheduling</div>
                <div className="mt-12 w-[259px] max-md:mt-10">
                  Book sessions that fit your schedule.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 pt-8 pb-28 w-full text-4xl tracking-tighter text-black rounded-2xl border border-solid bg-purple-200 bg-opacity-40 border-neutral-400 border-opacity-90 max-md:px-5 max-md:pb-24 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a8a2f4cfcf00748bd24f7709d75746e967f27746e794decb5b90e913930c206?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
                  className="object-contain self-center aspect-square w-[91px]"
                />
                <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:ml-1.5">
                  Affordable Pricing
                </div>
                <div className="mt-14 max-md:mt-10">
                  Get the best value for your budget.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 text-5xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Our Driving Packages
        </div>
        <div className="self-stretch mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start pt-8 pr-16 pb-72 pl-3 text-4xl tracking-tighter text-black rounded-2xl border-green-600 border-solid border-[5px] max-md:pr-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col ml-24 whitespace-nowrap max-md:ml-2.5">
                  <div className="max-md:mr-1">basic</div>
                  <div className="mt-24 max-md:mt-10">$200</div>
                </div>
                <div className="mt-20 max-md:mt-10">
                  5 Driving Lessons&quot;
                  <br />
                  &quot;Basic Road Safety Tips&quot;
                  <br />
                  &quot;Practice in Dual-Control Car&quot;
                </div>
                <div className="self-center px-14 py-4 mt-6 max-w-full bg-zinc-300 w-[284px] max-md:px-5">
                  Select Basic
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pt-12 pb-44 text-4xl tracking-tighter text-black rounded-2xl border-sky-500 border-solid border-[5px] max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <div>standard</div>
                <div className="mt-14 max-md:mt-10">$350</div>
                <div className="flex flex-col self-stretch pr-20 pl-3 mt-28 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                  <div className="self-start">
                    &quot;10 Driving Lessons&quot;
                    <br />
                    &quot;Defensive Driving Techniques&quot;
                    <br />
                    &quot;Mock Test for Exam Preparation&quot;
                    <br />
                    &quot;Practice in Dual-Control Car&quot;
                  </div>
                  <div className="self-center px-11 py-4 mt-9 max-w-full bg-zinc-300 w-[284px] max-md:pl-5">
                    Select Standard
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pt-16 pr-10 pb-52 pl-5 w-full text-4xl tracking-tighter text-white rounded-2xl bg-neutral-600 max-md:pr-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-36 max-w-full whitespace-nowrap">
                  <div className="self-end">premium</div>
                  <div className="self-start mt-12 max-md:mt-10">$500</div>
                </div>
                <div className="self-stretch mt-16 max-md:mt-10">
                  &quot;15 Driving Lessons&quot;
                  <br />
                  &quot;Advanced Driving Skills&quot;
                  <br />
                  &quot;Free Road Test Booking Assistance&quot;
                  <br />
                  &quot;On-the-Road Supervised Training&quot;
                </div>
                <div className="px-11 py-4 mt-24 max-w-full text-black bg-zinc-300 w-[284px] max-md:pl-5 max-md:mt-10">
                  Select Premium
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-8xl font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Frequently Asked{" "}
        </div>
        <div className="self-start mt-52 ml-20 text-4xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
          General Questions
        </div>
        <div className="flex flex-col items-start self-end px-9 py-8 mt-7 w-full text-2xl font-bold text-black rounded-xl bg-zinc-100 max-w-[1426px] max-md:px-5 max-md:max-w-full">
          <div className="ml-14 max-md:max-w-full">
            What services does [Driving School Name] offer?
          </div>
          <div className="shrink-0 self-stretch mt-7 h-px border border-solid border-zinc-400 max-md:max-w-full" />
          <div className="mt-6 ml-14 max-md:max-w-full">
            What services does [Driving School Name] offer?
          </div>
          <div className="shrink-0 self-stretch mt-8 h-px border border-solid border-zinc-400 max-md:max-w-full" />
          <div className="mt-7 ml-14 max-md:max-w-full">
            What services does [Driving School Name] offer?
          </div>
        </div>
      </div>
      <div className="flex flex-col px-px mt-52 font-bold text-center bg-zinc-700 bg-opacity-30 max-md:mt-10 max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center px-20 py-16 min-h-[532px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a32024a64fa341b1e9f2aa2bf7c1254c9d5f070ecf16712f72c324b4bd4a144?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
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

export default Packages