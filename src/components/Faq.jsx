'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const tabs = [
  {
    title: 'Do you offer pick-up and drop-off services?',
    description:
      'Yes, we provide convenient pick-up and drop-off services in Delta, Surrey, Vancouver and nearby areas.',
    
  },
  {
    title: 'What are the requirements to enroll in your driving school?',
    description:
      'You must meet the minimum legal driving age, provide a valid ID, and complete any necessary forms or parental consent.',
    
  },
  {
    title: 'How long does it take to complete the driving course?',
    description:
      ' The course duration ranges from 1–4 weeks depending on the program type and schedule flexibility.',
    
  },
  {
    title: 'How far in advance do i need to cancel the driving session?',
    description:
      'You need to cancel at least 48 hours before the session time on a phone call.',
    
  },
];
const tabs2 = [
  {
    title: ' What is included in the road test packages?',
    description:
      'Road test packages include a pre-test practice session, a vehicle for the test, and pick-up/drop-off services in Delta, Surrey, or Vancouver.',
    
  },
  {
    title: 'Can I mix session durations within a package?',
    description:
      'Each package is designed for a fixed session duration of either 60 or 90 minutes, but you can also contact us for specific duration of session.',
    
  },
  {
    title: 'Are there discounts for purchasing multiple sessions?',
    description:
      ' Yes, our 5 and 10 session packages offer cost savings compared to individual session rates.',
    
  },
];
const tabs3 = [
  {
    title: 'Are your vehicles equipped with double controls?',
    description:
      'Yes, all our training vehicles are equipped with dual controls to ensure the instructor can intervene if necessary.',
    
  },
  {
    title: 'What safety precautions do instructors take during lessons?',
    description:
      'Our instructors prioritize safety by maintaining a calm environment, using dual controls, and providing clear instructions at all times.',
    
  },
  {
    title: 'Do your lessons include emergency driving techniques?',
    description:
      'Yes, our lessons cover essential emergency techniques like sudden braking, hazard awareness, and evasive maneuvers.',
    
  },
  {
    title: 'What is your policy in case of accidents during lessons?',
    description:
      'Our vehicles are insured, and instructors take full control to prevent accidents; in rare cases, we handle incidents professionally and promptly.',
    
  },
];

function Faq() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(tabs[0]);
  const handleClick = async (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeItem2, setActiveItem2] = useState(tabs2[0]);
  const handleClick2 = async (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
    const newActiveItem2 = tabs2.find((_, i) => i === index);
    setActiveItem2(newActiveItem2);
  };

  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeItem3, setActiveItem3] = useState(tabs3[0]);
  const handleClick3 = async (index) => {
    setActiveIndex3(activeIndex3 === index ? null : index);
    const newActiveItem3 = tabs2.find((_, i) => i === index);
    setActiveItem3(newActiveItem3);
  };

  return (
    <div className="flex overflow-hidden pt-20 flex-col bg-[#D4EBF8]">
      
      <div className="w-screen h-44  text-center py-10  text-white bg-[#0A3981]">
        <h1 className='text-4xl hidden md:block font-bold mb-2 px-2  md:text-6xl lg:text-7xl'>FAQs</h1>
        <h1 className='text-5xl  md:hidden font-bold mb-2 '>FAQs</h1>
        <h1 className='lg:text-xl px-4' >Find Clear and Quick Solutions to All Your Driving School Queries.</h1>
      </div>

      
    <h2 className='text-3xl md:text-4xl  font-bold mt-10 text-center tracking-tight text-black'>General Questions</h2>
      <div className='h-fit border mx-10 mt-10  rounded-lg p-2 text-black bg-white'>
        
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 font-bold text-lg text-zinc-800 tracking-tight w-full cursor-pointer sm:text-base  text-start transition-all   text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? 'rotate-45' : 'rotate-0 '
                  } transition-transform  ease-in-out w-5 h-5   text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode='sync'>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={` text-zinc-700 p-3 text-sm md:text-lg pt-0 `}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className='w-screen bg-[#0A3981] h-[550px] md:h-96 my-20 py-10 px-2'>

          <h1 className='text-white font-bold text-3xl md:text-4xl text-center'>Packages Related Questions</h1>

        
      <div className='h-fit border mx-10 mt-10  rounded-lg p-2 text-black bg-white'>
        
          {tabs2.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs2.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick2(index)}
            >
              <button
                className={`p-3 px-2 font-bold text-lg text-zinc-800 tracking-tight w-full cursor-pointer sm:text-base  text-start transition-all   text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex2 === index ? 'rotate-45' : 'rotate-0 '
                  } transition-transform  ease-in-out w-5 h-5   text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode='sync'>
                {activeIndex2 === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={` text-zinc-700 p-3 text-sm md:text-lg pt-0 `}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>





        </div>

        <h2 className='text-3xl md:text-4xl  font-bold  text-center tracking-tight text-black'>Safety Related Questions</h2>
      <div className='h-fit border mx-10 my-10  rounded-lg p-2 text-black bg-white'>
        
          {tabs3.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs3.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick3(index)}
            >
              <button
                className={`p-3 px-2 font-bold text-lg text-zinc-800 tracking-tight w-full cursor-pointer sm:text-base  text-start transition-all      flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex3 === index ? 'rotate-45' : 'rotate-0 '
                  } transition-transform  ease-in-out w-5 h-5   text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode='sync'>
                {activeIndex3 === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={` text-zinc-700 p-3 text-sm md:text-lg pt-0 `}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>


        <h1 className='px-10 text-2xl py-10 text-center font-bold tracking-tight'>Got any Other Queries, Contact us or fill the Inquiry Form on <NavLink className="text-blue-500 italic underline" to="/contact">Contact Page</NavLink> </h1>


      
    </div>
  );
}

export default Faq