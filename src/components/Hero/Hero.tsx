import React from 'react';
import GitHubIcon from '../../images/icon-github.svg';
import FrontEndMonterIcon from '../../images/icon-frontend-mentor.svg';
import LinkedInIcon from '../../images/icon-linkedin.svg';
import TwitterIcon from '../../images/icon-twitter.svg';
import ProfileImageMobile from '../../images/image-profile-mobile.webp';

const Hero = () => {
  return (
    <section className="bg-portfolio-black ">
      <nav className="mx-auto w-[154px] pt-5 flex flex-col justify-center items-center">
        <p className="text-white text-2xl">adamkeys</p>
        <div className="pt-5 flex flex-row w-full justify-between">
          <img className="w-[19px] h-[19px]" src={GitHubIcon} />
          <img className="w-[19px] h-[19px]" src={FrontEndMonterIcon} />
          <img className="w-[19px] h-[19px]" src={LinkedInIcon} />
          <img className="w-[19px] h-[19px]" src={TwitterIcon} />
        </div>
      </nav>
      <div className="flex flex-col items-center">
        <div className="text-[40px] leading-10 text-white text-center font-bold">
          <p>Nice to meet you!</p>
          <p>
            I&apos;m{' '}
            <span className="border-b-4 border-portfolio-green">Adam Keys</span>
            .
          </p>
        </div>
        <div className="pt-6 text-base leading-6 text-white text-center font-medium">
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
