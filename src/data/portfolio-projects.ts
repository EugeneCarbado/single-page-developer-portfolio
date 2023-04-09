import ThumbNailOneMobile from '../images/thumbnail-project-1-small.webp';
import ThumbNailTwoMobile from '../images/thumbnail-project-2-small.webp';
import ThumbNailThreeMobile from '../images/thumbnail-project-3-small.webp';
import ThumbNailFourMobile from '../images/thumbnail-project-4-small.webp';
import ThumbNailFiveMobile from '../images/thumbnail-project-5-small.webp';
import ThumbNailSixMobile from '../images/thumbnail-project-6-small.webp';
import ThumbNailOneDesktop from '../images/thumbnail-project-1-large.webp';
import ThumbNailTwoDesktop from '../images/thumbnail-project-2-large.webp';
import ThumbNailThreeDesktop from '../images/thumbnail-project-3-large.webp';
import ThumbNailFourDesktop from '../images/thumbnail-project-4-large.webp';
import ThumbNailFiveDesktop from '../images/thumbnail-project-5-large.webp';
import ThumbNailSixDesktop from '../images/thumbnail-project-6-large.webp';

interface PortfolioProjects {
  portfolioImageSmall: string;
  portfolioImageLarge: string;
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
    portfolioImageSmall: ThumbNailOneMobile,
    portfolioImageLarge: ThumbNailOneDesktop,
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
    portfolioImageSmall: ThumbNailTwoMobile,
    portfolioImageLarge: ThumbNailTwoDesktop,
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
    portfolioImageSmall: ThumbNailThreeMobile,
    portfolioImageLarge: ThumbNailThreeDesktop,
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
    portfolioImageSmall: ThumbNailFourMobile,
    portfolioImageLarge: ThumbNailFourDesktop,
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
    portfolioImageSmall: ThumbNailFiveMobile,
    portfolioImageLarge: ThumbNailFiveDesktop,
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
    portfolioImageSmall: ThumbNailSixMobile,
    portfolioImageLarge: ThumbNailSixDesktop,
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
