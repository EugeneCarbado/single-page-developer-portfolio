import ThumbNailOneMobile from '../images/thumbnail-project-1-small.webp';
import ThumbNailTwoMobile from '../images/thumbnail-project-2-small.webp';
import ThumbNailThreeMobile from '../images/thumbnail-project-3-small.webp';
import ThumbNailFourMobile from '../images/thumbnail-project-4-small.webp';
import ThumbNailFiveMobile from '../images/thumbnail-project-5-small.webp';
import ThumbNailSixMobile from '../images/thumbnail-project-6-small.webp';

interface PortfolioProjects {
  portfolioImage: string;
  portfolioImageAlt: string;
  portfolioTile: string;
  portfolioHtml: string;
  portfolioCss: string;
  portfolioJavascript: string;
  portfolioProjectViewLink: string;
  portfolioProjectCodeLink: string;
}

export const PortfolioProjects: PortfolioProjects[] = [
  {
    portfolioImage: ThumbNailOneMobile,
    portfolioImageAlt: 'Design portfolio image',
    portfolioTile: 'Design portfolio',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: '',
    portfolioProjectViewLink:
      'https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x',
    portfolioProjectCodeLink:
      'https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x',
  },
  {
    portfolioImage: ThumbNailTwoMobile,
    portfolioImageAlt: 'E-learning landing page image',
    portfolioTile: 'E-learning landing page',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: '',
    portfolioProjectViewLink:
      'https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q',
    portfolioProjectCodeLink:
      'https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q',
  },
  {
    portfolioImage: ThumbNailThreeMobile,
    portfolioImageAlt: 'Todo web app image',
    portfolioTile: 'Todo web app',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
      'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
    portfolioProjectCodeLink:
      'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
  },
  {
    portfolioImage: ThumbNailFourMobile,
    portfolioImageAlt: 'Entertainment web app image',
    portfolioTile: 'Entertainment web app',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
      'https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X',
    portfolioProjectCodeLink:
      'https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X',
  },
  {
    portfolioImage: ThumbNailFiveMobile,
    portfolioImageAlt: 'Memory game image',
    portfolioTile: 'Memory game',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
      'https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM',
    portfolioProjectCodeLink:
      'https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM',
  },
  {
    portfolioImage: ThumbNailSixMobile,
    portfolioImageAlt: 'Art gallery showcase image',
    portfolioTile: 'Art gallery showcase',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
      'https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6',
    portfolioProjectCodeLink:
      'https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6',
  },
];
