import React from 'react'

function Register() {
  return (
    <>
    <div className="flex py-24 relative flex-col justify-center items-center px-20  w-full min-h-[364px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col w-full max-w-[1475px] max-md:max-w-full">
          <div className="text-8xl pt-10 font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
          Start Your Driving Journey Today!
          </div>
          <div className="self-center mt-7 text-4xl tracking-tighter text-zinc-100 max-md:max-w-full">
          Register Now to Master the Skills, Gain Confidence, and Hit the Road with Safety!
          </div>
        </div>
      </div>
    <div className='py-20 flex justify-center'>
      
        {/* <h1>here the form will be embeded</h1> */}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSckzm4sdySYNq1MHCwlfrIwPPgAEaAFt5lGSUDKMZ0lXLJ3Qg/viewform?embedded=true" width="800" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    </>
  )
}

export default Register