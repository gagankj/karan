'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    
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

  return (
    <div className="flex overflow-hidden pt-16 flex-col bg-zinc-50 pb-[532px] max-md:pb-24">
      
      <div className="flex relative flex-col justify-center items-center px-20 py-10 w-full min-h-[364px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e5329504af8eeeac2f775c34f2ac65eaaee929434501f2e0e8b0a52a61d6d9d?placeholderIfAbsent=true&apiKey=b3ab5871af914b8aa297a76ea135062a"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col w-full max-w-[1475px] max-md:max-w-full">
          <div className="text-8xl font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
          Got Questions? We've Got Answers!
          </div>
          <div className="self-center mt-7 text-4xl tracking-tighter text-zinc-100 max-md:max-w-full">
          Find Clear and Quick Solutions to All Your Driving School Queries.
          </div>
        </div>
      </div>

      
    <h2 className='text-2xl font-bold mt-20 mx-24'>General Questions</h2>
      <div className='h-fit border mx-24 mt-10  rounded-lg p-2 text-black bg-white'>
        
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 font-bold text-3xl w-full cursor-pointer sm:text-base  items-center transition-all   text-black   flex gap-2 
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
                      className={` text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
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
  );
}

export default Faq