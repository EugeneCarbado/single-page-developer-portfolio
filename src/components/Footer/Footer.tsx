import React from 'react';
import {socialLinks} from '../../data/links';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-portfolio-bg-grey pt-[39px] pb-[60px]">
      <p className="text-white text-2xl font-bold w-[154px] text-center">
        adamkeyes
      </p>
      <div className="pt-5 flex flex-row justify-between w-[154px]">
        {socialLinks.map((item, key) => (
          <a href={item.hrefLink} target="_blank" rel="noreferrer" key={key}>
            <img
              className={item.imageStyles}
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
