import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';




const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[600px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
      <p className='text-center '> Showcase of photos taken at the studio</p>
      <div className='relative flex justify-center p-4'>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            id='gallery-img'
            className={
              index === current
                ? 'opacity-[1] ease-in duration-300'
                : 'opacity-0'
            }
          >
              <BiSolidLeftArrow
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-[#e0e8e8]/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='a set of images from the studio'
                  width='1000'
                  height='1000'
                  objectfit='cover'
                  loading='lazy'
                 

                  
                />
              )}
              <BiSolidRightArrow
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-[#e0e8e8]/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Slider;