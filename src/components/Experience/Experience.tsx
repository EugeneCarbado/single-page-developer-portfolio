import React from 'react';
import PatternRings from '../../images/pattern-rings.svg';

const Experience = () => {
  return (
    <section className="relative py-10 mx-[14px] flex flex-col items-center text-white text-center border-y-[1px]">
      <div>
        <div className='pb-5'>
          <h2 className='text-[32px] font-bold'>HTML</h2>
          <p className='text-portfolio-grey capitalize'>4 years experience</p>
        </div>
        <div className='pb-5'>
          <h2 className='text-[32px] font-bold'>CSS</h2>
          <p className='text-portfolio-grey capitalize'>4 years experience</p>
        </div>
      </div>
      <div>
        <div  className='pb-5'>
          <h2 className='text-[32px] font-bold'>Javascript</h2>
          <p className='text-portfolio-grey capitalize'>4 years experience</p>
        </div>
        <div  className='pb-5'>
          <h2 className='text-[32px] font-bold'>Accessibilty</h2>
          <p className='text-portfolio-grey capitalize'>4 years experience</p>
        </div>
      </div>
      <div>
        <div  className='pb-5'>
          <h2 className='text-[32px] font-bold'>React</h2>
          <p className='text-portfolio-grey capitalize'>3 years experience</p>
        </div>
        <div>
          <h2 className='text-[32px] font-bold'>Sass</h2>
          <p className='text-portfolio-grey capitalize'>3 years experience</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
