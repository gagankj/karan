import React from 'react'
import { IoMdCall } from "react-icons/io";
import { GoMail } from "react-icons/go";

function Contact() {
  return (
    <div className=''>
      <div className="flex relative flex-col justify-center items-center px-20 py-10 w-full min-h-[364px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex pt-10 relative flex-col w-full max-w-[1475px] max-md:max-w-full">
          <div className="text-8xl font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
          Get in touch with Us
          </div>
          <div className="self-center mt-7 text-xl text-center md:text-4xl tracking-tighter text-zinc-100 max-md:max-w-full">
          Reach out to us for any inquiries or assistance today!
          </div>
        </div>
      </div>


      <div className='flex py-20 px-32  justify-center gap-20'>
        <div className='h-80 flex bg-gradient-to-br from-blue-100 to-blue-400 flex-col items-center p-10 w-96 border border-zinc-300  rounded-xl'>
          <IoMdCall className='text-6xl text-blue-800' />
          <h2 className='text-2xl mt-4 tracking-tight font-normal'>7788460018</h2>
          <h2 className='mt-10 text-3xl tracking-tight font-medium'>Monday to Friday</h2>
          <h2 className=''>9:00 AM to 6:00 PM</h2>
        </div>
        <div className='h-80 flex bg-gradient-to-br from-green-100 to-green-400 flex-col items-center p-10 w-96 border border-zinc-300  rounded-xl'>
          <GoMail className='text-6xl text-green-800' />
          <h2 className='text-2xl mt-4 tracking-tight font-normal'>karandrivingschoolltd@gmail.com</h2>
          <h2 className='mt-10 text-3xl tracking-tight font-medium'>We respond within</h2>
          <h2 className=''>24 Hours</h2>
        </div>
        
      </div>

      <div className='flex flex-col items-center'>

      <h1 className='text-6xl font-semibold tracking-tight'>Send a Message</h1>
      <iframe className='mt-10' src="https://docs.google.com/forms/d/e/1FAIpQLSc6bGaRrdbVuaNbysBy7zGUwAx3tdTmXX7-FL0ikFylt3ZLkA/viewform?embedded=true" width="640" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>


    </div>
  )
}

export default Contact