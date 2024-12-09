import React, { useState } from 'react';
import { FaChalkboardTeacher, FaCar } from 'react-icons/fa';
import { GiRoad } from 'react-icons/gi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import {  FaUserGraduate, FaRedoAlt } from "react-icons/fa";

const topics = [
  "Traffic rules and regulations",
  "Emergency handling techniques",
  "Defensive driving practices",
];

function About() {

  const cards = [
    {
      icon: <FaChalkboardTeacher size={50} className="text-blue-600" />,
      title: 'Expert Instructors',
      description:
        'Our certified and experienced instructors are patient, professional, and committed to helping you succeed. They tailor each lesson to your unique learning style, ensuring a comfortable and productive experience.',
    },
    {
      icon: <FaCar size={50} className="text-blue-600" />,
      title: 'Modern Training Fleet',
      description:
        'Learn in our well-maintained, dual-control vehicles designed for safety and comfort. These state-of-the-art cars offer the ideal environment for gaining hands-on driving experience.',
    },
    {
      icon: <GiRoad size={50} className="text-blue-600" />,
      title: 'Comprehensive Driving Lessons',
      description:
        'From mastering basic driving skills to understanding traffic laws and defensive driving techniques, our lessons are structured to make you a confident and responsible driver.',
    },
    {
      icon: <AiOutlineCalendar size={50} className="text-blue-600" />,
      title: 'Flexible Scheduling',
      description:
        'Busy schedule? No problem! We offer evening, weekend, and customized lesson plans to fit your availability, making it easy to learn at your own pace.',
    },
    {
      icon: <BiGroup size={50} className="text-blue-600" />,
      title: 'Inclusive Learning Environment',
      description:
        'We pride ourselves on creating a friendly, supportive atmosphere for students of all ages and backgrounds. At Karan Driving School, every learner feels welcome and empowered.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const firstCardIndex = currentIndex;
    const secondCardIndex = (currentIndex + 1) % cards.length;
    return [cards[firstCardIndex], cards[secondCardIndex]];
  };


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
          <div className="mt-2 text-3xl tracking-tight  text-center text-zinc-300 max-md:max-w-full">
            Empowering Safe, Confident Drivers for Life
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-24 w-full max-w-[1515px] max-md:mt-10 max-md:max-w-full">
        <div className="text-7xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
          Karan Driving School
        </div>
        <div className="self-start mt-20 text-3xl tracking-tight text-justify text-neutral-700 w-[804px] max-md:mt-10 max-md:max-w-full">
        Welcome to Karan Driving School, where driving excellence meets personalized instruction. We are dedicated to empowering individuals with the skills, confidence, and knowledge they need to become safe and responsible drivers. Whether you’re just starting or need advanced training, we’re here to guide you every step of the way.
        </div>
        
        <div className="mt-32 ml-12 text-7xl p-4 font-bold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Why Choose Us?
        </div>

        <div className="relative w-4/5 text-white p-8 overflow-hidden">
      {/* <h1 className="text-center text-2xl font-bold mb-6">Our Features</h1> */}
      <div className="flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 text-black font-bold  text-3xl  p-3 rounded-full"
        >
          <GrPrevious />
        </button>
        <div className="flex gap-6">
          {getVisibleCards().map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-zinc-100 rounded-lg shadow-lg p-6 w-96"
            >
              <div>{card.icon}</div>
              <h2 className="text-2xl tracking-tight text-zinc-900 font-bold mt-4">{card.title}</h2>
              <p className="mt-2 text-xl text-zinc-700">{card.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 text-zinc-900 text-3xl  p-3 rounded-full"
        >
          <GrNext />
        </button>
      </div>
    </div>
        
        <div className="mt-32 text-7xl font-bold tracking-tighter text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Our Commitment to Road Safety
        </div>
        <h3 className='text-3xl text-zinc-700 tracking-tight mt-2'>Safety is at the heart of our training. </h3>
        <div className="mt-14  flex items-center justify-center">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-blue-600 text-center text-white p-6 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
          >
            <h2 className="text-2xl tracking-tight font-medium text-white">{topic}</h2>
          </div>
        ))}
      </div>
    </div>
      </div>
      <h3 className='text-center text-zinc-700 mt-10 text-xl'>By choosing Karan Driving School, you’ll develop not just the skills to pass your driving test but the mindset to drive safely for life.</h3>
      <div className=" text-center flex flex-col items-center py-16">

      <section className=" text-gray-100 mt-14 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-7xl font-bold tracking-tight text-blue-600 mb-6 animate-bounce ">
          Who We Serve
        </h2>
        <p className="text-xl text-zinc-700 mb-8">
          We proudly serve students in Lower Mainland and surrounding areas, including:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 bg-zinc-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-zinc-200 group">
            <FaUserGraduate className="text-blue-500 text-4xl mb-4 " />
            <h3 className="text-xl font-semibold tracking-tight text-zinc-700 ">
              Teenagers Preparing for Their First License
            </h3>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 bg-zinc-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-zinc-200 group">
            <FaCar className="text-blue-500 text-4xl mb-4 " />
            <h3 className="text-xl font-semibold text-zinc-700 tracking-tight ">
              Adult Learners Starting Fresh
            </h3>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 bg-zinc-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-zinc-200 group">
            <FaRedoAlt className="text-blue-500 text-4xl mb-4 " />
            <h3 className="text-xl font-semibold text-zinc-700 ">
              Drivers Looking to Regain Confidence
            </h3>
          </div>
        </div>

        <p className="text-zinc-700 mt-8 text-lg">
          No matter your starting point, we’re here to help you succeed.
        </p>
      </div>
    </section>


      <h2 className="text-[#121212] tracking-tight mt-32 text-5xl font-bold mb-4">Ready to drive with us?</h2>
      <p className="text-zinc-700 text-xl mb-6">Join Karan Driving School today!</p>
      <NavLink to="/register">

      <div className="group relative tracking-tight cursor-pointer mt-4 py-3 w-48  bg-blue-600 rounded-full overflow-hidden text-white text-center font-medium">
      <span className="translate-y-0 text-xl group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
        Register Now
      </span>
      <div className="flex gap-2 text-xl text-white bg-blue-600 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
        <span>Register Now</span>
      </div>
      </div>
</NavLink>
    </div>
      
    </div>
  );
}


export default About