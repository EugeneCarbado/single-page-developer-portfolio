import React from 'react';
import {PortfolioProjects} from '../../data/portfolio-projects';

const Projects = () => {
  return (
    <section className="mx-[14px]">
      <div className="flex justify-between items-center pb-10">
        <h3 className="text-[40px] font-bold text-white">Projects</h3>
        <button className="uppercase text-white pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold">
          Contact me
        </button>
      </div>
      <div className="flex flex-col">
        {PortfolioProjects.map((item, key) => (
          <div key={key} className="flex flex-col pb-10">
            <img
              className="pb-5"
              src={item.portfolioImage}
              alt={item.portfolioImageAlt}
            />
            <h4 className="text-white uppercase text-[24px] font-bold pb-1.5">
              {item.portfolioTile}
            </h4>
            <div className="text-portfolio-grey uppercase pb-0.5 text-white text-[18px] font-medium flex">
              <p className="pr-[18px]">{item.portfolioHtml}</p>
              <p className="pr-[18px]">{item.portfolioCss}</p>
              <p>{item.portfolioJavascript}</p>
            </div>
            <div className="flex">
              <a
                target="_blank"
                rel="noreferrer"
                href={item.portfolioProjectViewLink}
                className="uppercase text-white mt-5 mr-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold">
                View Project
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={item.portfolioProjectCodeLink}
                className="uppercase text-white mt-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold">
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
