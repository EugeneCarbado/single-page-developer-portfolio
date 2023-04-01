import React from 'react';
import {PortfolioProjects} from '../../data/portfolio-projects';

const Projects = () => {
  return (
    <section className="mx-[14px] pb-10 md:mx-auto md:px-[30px] md:max-w-screen-md">
      <div className="flex justify-between items-center pb-10">
        <h3 className="text-[40px] font-bold text-white md:text-[72px]">
          Projects
        </h3>
        <a
          href="#contact"
          className="uppercase text-white pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
          Contact me
        </a>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20 md:pb-14">
        {PortfolioProjects.map((item, key) => (
          <div
            key={key}
            className="flex flex-col pb-10 md:w-[340px] md:h-[390px]">
            <img
              className="pb-5"
              src={item.portfolioImage}
              alt={item.portfolioImageAlt}
            />
            <h4 className="text-white uppercase text-[24px] font-bold pb-1.5">
              {item.portfolioTile}
            </h4>
            <div className="uppercase pb-0.5 text-white text-[18px] font-medium flex">
              <p className="pr-[18px]">{item.portfolioHtml}</p>
              <p className="pr-[18px]">{item.portfolioCss}</p>
              <p>{item.portfolioJavascript}</p>
            </div>
            <div className="flex">
              <a
                target="_blank"
                rel="noreferrer"
                href={item.portfolioProjectViewLink}
                className="uppercase text-white mt-5 mr-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
                View Project
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={item.portfolioProjectCodeLink}
                className="uppercase text-white mt-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
                View code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
