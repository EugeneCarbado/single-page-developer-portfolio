import React from 'react';
import {socialLinks} from '../../data/links';
import ProfileImageMobile from '../../images/image-profile-mobile.webp';
import ProfileImageTablet from '../../images/image-profile-tablet.webp';
// import ProfileImageDesktop from '../../images/image-profile-desktop.webp';
import {cx} from '@emotion/css';
import styles from './Hero.styles';

const Hero = () => {
  const windowWidth = window.innerWidth;
  const tabletMedia = 768;
  // const desktopMedia = 1024;

  return (
    <section className="pb-20 md:max-w-screen-md md:mx-auto">
      <div className={`container relative ${cx(styles.container)}`}>
        <div className={`${cx(styles.circleImage)}`}></div>
        <img
          className={`z-10 ${cx(styles.portfolioImage)}`}
          src={
            windowWidth < tabletMedia ? ProfileImageMobile : ProfileImageTablet
          }
        />
        <div className={`${cx(styles.elongatedCircleImage)}`}></div>
        <nav
          className={`mx-auto w-[154px] pb-3 flex flex-col justify-center items-center z-20 md:flex-row md:w-full md:justify-between md:px-[30px] md:h-fit md:pt-[29px] ${cx(
            styles.navLinks,
          )}`}>
          <p className="text-white text-2xl font-bold md:text-3xl">adamkeyes</p>
          <div className="pt-5 flex flex-row w-full justify-between md:w-[192px] md:pt-0">
            {socialLinks.map((item, key) => (
              <a
                href={item.hrefLink}
                target="_blank"
                rel="noreferrer"
                key={key}>
                <img
                  className="w-[19px] h-[19px] md:w-[24px] md:h-[24px]"
                  src={item.imageLink}
                  alt={item.altTag}
                />
              </a>
            ))}
          </div>
        </nav>

        <div
          className={`pt-10 pl-[32px] md:flex flex-col ${cx(styles.heroText)}`}>
          <div className="text-[72px] leading-[72px] text-white text-left font-bold z-30">
            <h1>Nice to</h1>
            <h1>
              meet you! I&apos;m{' '}
              <span className="border-b-4 border-portfolio-green">
                Adam Keyes
              </span>
              .
            </h1>
          </div>
          <div className="pt-[47px] text-[18px] leading-[28px] text-portfolio-grey text-left font-medium">
            <p>Based in the UK, I&apos;m a front-end developer</p>
            <p>passionate about building accessible web apps</p>
            <p>that users love.</p>
          </div>
          <a
            href="#contact"
            className="uppercase text-white w-[120px] mt-[34px] pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
            Contact me
          </a>
        </div>
      </div>
      <div className="pt-10 flex flex-col items-center md:hidden">
        <div className="text-[40px] leading-10 text-white text-center font-bold">
          <h1>Nice to meet you!</h1>
          <h1>
            I&apos;m{' '}
            <span className="border-b-4 border-portfolio-green">
              Adam Keyes
            </span>
            .
          </h1>
        </div>
        <div className="pt-8 text-base leading-6 text-portfolio-grey text-center font-medium">
          <p>Based in the UK, I&apos;m a front-end developer</p>
          <p>passionate about building accessible web</p>
          <p>apps that users love.</p>
        </div>
        <a
          href="#contact"
          className="uppercase text-white mt-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default Hero;
