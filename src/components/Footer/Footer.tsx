import React from 'react';
import {socialLinks} from '../../data/links';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-portfolio-bg-grey pt-[39px] pb-[60px] md:flex-row md:w-full md:justify-between md:px-[30px] md:h-fit md:pt-[29px]">
      <p className="text-white text-2xl font-bold w-[154px] text-center md:text-[32px]">
        adamkeyes
      </p>
      <div className="pt-5 flex flex-row justify-between w-[154px] md:pt-0 md:w-[192px]">
        {socialLinks.map((item, key) => (
          <a href={item.hrefLink} target="_blank" rel="noreferrer" key={key}>
            <img
              className="w-[19px] h-[19px] md:w-[24px] md:h-[24px]"
              src={item.imageLink}
              alt={item.altTag}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
