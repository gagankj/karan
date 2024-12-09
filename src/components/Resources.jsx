import * as React from "react";

function Resources() {

  const resources = [
    {
      icon: '🚗', // Example icon, replace with actual icon library like FontAwesome
      title: 'ICBC Road Test',
      description: 'Book your ICBC road test.',
      buttonText: 'Book Now',
      link: 'https://www.icbc.com/driver-licensing/visit-dl-office/Book-a-road-test',
    },
    {
      icon: '📘',
      title: 'Drive Smart Handbook',
      description: 'Learn to drive smart with the official handbook.',
      buttonText: 'Learn More',
      link:'https://downloads.ctfassets.net/nnc41duedoho/63cHBOAVpOAQGOOMBFhFbL/0120c57c3c706956bd3e410e179642bd/driver-full.pdf'
    },
    {
      icon: '📝',
      title: 'Knowledge Test',
      description: 'Take the knowledge test to prepare for driving.',
      buttonText: 'Take Test',
      link:'https://practicetest.icbc.com/#/'
    },
    {
      icon: '🚦',
      title: 'Road Signs',
      description: 'Test your knowledge of road signs.',
      buttonText: 'Take Test',
      link:'https://practicetest.icbc.com/#/signs'
    },
    {
      icon: '🏙️',
      title: 'Road Safety',
      description: 'Download the Street Sense road safety guide.',
      buttonText: 'Learn more',
      link:'https://www.icbc.com/road-safety/crashes-happen/street-sense'
    },
  ];
  return (
    <div className="flex overflow-hidden pt-16 flex-col bg-zinc-50 pb-[522px] max-md:pb-24">
      
      <div className="flex relative flex-col justify-center items-center px-20 py-10 w-full min-h-[364px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col w-full max-w-[1475px] max-md:max-w-full">
          <div className="text-8xl font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-5xl">
          Master the Road with Confidence
          </div>
          <div className="self-center mt-7 text-xl text-center md:text-3xl tracking-tighter text-zinc-100 max-md:max-w-full">
          Explore Our Comprehensive Driving Resources to Help You Become a Skilled and Safe Driver.
          </div>
        </div>
      </div>
      <div className="grid mt-20  px-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{resource.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <a href={resource.link} target="_blank">

            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
              {resource.buttonText}
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources