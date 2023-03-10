import React from 'react';
import {socialLinks} from '../../data/links';
import ProfileImageMobile from '../../images/image-profile-mobile.webp';
import PatternRings from '../../images/pattern-rings.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="bg-portfolio-black pb-10">
      {/* <div className="grid grid-cols-3"> */}
      <div className="container">
        <div className="circleImage"></div>
        <img className="portfolioImage z-10" src={ProfileImageMobile} />
        <img className="elongCicleImage" src={PatternRings} />
        <nav className="mx-auto w-[154px] pb-3 flex flex-col justify-center items-center navLinks z-20">
          <p className="text-white text-2xl font-bold">adamkeyes</p>
          <div className="pt-5 flex flex-row w-full justify-between">
            {socialLinks.map((item, key) => (
              <a
                href={item.hrefLink}
                target="_blank"
                rel="noreferrer"
                key={key}>
                <img
                  className={item.imageStyles}
                  src={item.imageLink}
                  alt={item.altTag}
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
      {/* <div className="container">
        <div className="circleImage"></div>
        <img className="portfolioImage z-10" src={ProfileImageMobile} />
        <img className="elongCicleImage" src={PatternRings} />
        <nav className="mx-auto w-[154px] pb-3 flex flex-col justify-center items-center navLinks z-20">
          <p className="text-white text-2xl font-bold">adamkeyes</p>
          <div className="pt-5 flex flex-row w-full justify-between">
            {socialLinks.map((item, key) => (
              <a
                href={item.hrefLink}
                target="_blank"
                rel="noreferrer"
                key={key}>
                <img
                  className={item.imageStyles}
                  src={item.imageLink}
                  alt={item.altTag}
                />
              </a>
            ))}
          </div>
        </nav>
      </div> */}
      <div className="pt-10 flex flex-col items-center">
        <div className="text-[40px] leading-10 text-white text-center font-bold">
          <p>Nice to meet you!</p>
          <p>
            I&apos;m{' '}
            <span className="border-b-4 border-portfolio-green">
              Adam Keyes
            </span>
            .
          </p>
        </div>
        <div className="pt-6 text-base leading-6 text-portfolio-grey text-center font-medium">
          <p>Based in the UK, I&apos;m a front-end developer</p>
          <p>passionate about building accessible web</p>
          <p>apps that users love.</p>
        </div>
        <button className="uppercase text-white mt-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold">
          Contact me
        </button>
      </div>
    </section>
  );
};

export default Hero;
