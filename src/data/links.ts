import GitHubIcon from '../images/icon-github.svg';
import FrontEndMonterIcon from '../images/icon-frontend-mentor.svg';
import LinkedInIcon from '../images/icon-linkedin.svg';
import TwitterIcon from '../images/icon-twitter.svg';

interface SocialLinks {
  imageLink: string;
  altTag: string;
  imageStyles: string;
  hrefLink: string;
}

export const socialLinks: SocialLinks[] = [
  {
    imageLink: GitHubIcon,
    altTag: 'GitHub icon',
    imageStyles: 'w-[19px] h-[19px]',
    hrefLink: 'https://github.com/',
  },
  {
    imageLink: FrontEndMonterIcon,
    altTag: 'Frontend mentor icon',
    imageStyles: 'w-[19px] h-[19px]',
    hrefLink: 'https://www.frontendmentor.io/',
  },
  {
    imageLink: LinkedInIcon,
    altTag: 'LinkedIn icon',
    imageStyles: 'w-[19px] h-[19px]',
    hrefLink: 'https://www.linkedin.com/',
  },
  {
    imageLink: TwitterIcon,
    altTag: 'Twitter icon',
    imageStyles: 'w-[19px] h-[19px]',
    hrefLink: 'https://twitter.com/',
  },
];
