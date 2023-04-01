import React from 'react';
import styles from './Experience.styles';

const Experience = () => {
  return (
    <section
      className={`${styles.experienceImage} pb-20 md:max-w-screen-md md:mx-auto`}>
      <div className="py-10 mx-[14px] flex flex-col items-center text-white text-center border-t-[1px] border-b-[1px] md:text-left md:mx-[30px] md:border-b-0 md:border-t-[1px] md:pb-0">
        <div className="md:flex w-full">
          <div className="pb-5">
            <h2 className="text-[32px] font-bold md:text-[48px] w-[345px]">
              HTML
            </h2>
            <p className="text-portfolio-grey capitalize md:text-[18px]">
              4 years experience
            </p>
          </div>
          <div className="pb-5">
            <h2 className="text-[32px] font-bold md:text-[48px]">CSS</h2>
            <p className="text-portfolio-grey capitalize md:text-[18px]">
              4 years experience
            </p>
          </div>
        </div>
        <div className="md:flex w-full">
          <div className="pb-5">
            <h2 className="text-[32px] font-bold md:text-[48px] w-[345px]">
              Javascript
            </h2>
            <p className="text-portfolio-grey capitalize md:text-[18px]">
              4 years experience
            </p>
          </div>
          <div className="pb-5">
            <h2 className="text-[32px] font-bold md:text-[48px]">
              Accessibilty
            </h2>
            <p className="text-portfolio-grey capitalize md:text-[18px]">
              4 years experience
            </p>
          </div>
        </div>
        <div className="md:flex w-full">
          <div className="pb-5">
            <h2 className="text-[32px] font-bold md:text-[48px] w-[345px]">
              React
            </h2>
            <p className="text-portfolio-grey capitalize md:text-[18px]">
              3 years experience
            </p>
          </div>
          <div>
            <h2 className="text-[32px] font-bold md:text-[48px]">Sass</h2>
            <p className="text-portfolio-grey capitalize md:text-[18px]">
              3 years experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
