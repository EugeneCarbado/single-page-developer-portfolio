import {css} from '@emotion/css';
import PatternCircle from '../../images/pattern-circle.svg';
import PatternRings from '../../images/pattern-rings.svg';

const styles = {
  container: css`
    display: grid;
    grid-template-columns: 0.8fr 1.4fr 0.8fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 0.3fr 1.7fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      padding: 100px;
    }
  `,
  circleImage: css`
    grid-area: 2 / 3 / 4 / 4;
    background-image: url(${PatternCircle});
    background-repeat: no-repeat;
    background-position: calc(100% + 65px) calc(100% + -1px);

    @media screen and (min-width: 768px) {
      grid-area: 4 / 5 / 6 / 6;
    }
  `,
  portfolioImage: css`
    grid-area: 1 / 2 / 4 / 3;

    @media screen and (min-width: 768px) {
      grid-area: 1 / 4 / 6 / 6;
    }
  `,
  elongatedCircleImage: css`
    grid-area: 1 / 1 / 3 / 3;
    background-image: url(${PatternRings});
    background-repeat: no-repeat;
    background-position: calc(100% + -95px) calc(100% + -2px);

    @media screen and (min-width: 768px) {
      grid-area: 2 / 1 / 3 / 3;
    }
  `,
  navLinks: css`
    grid-area: 1 / 2 / 2 / 3;

    @media screen and (min-width: 768px) {
      grid-area: 1 / 1 / 2 / 6;
    }
  `,
  heroText: css`
    @media screen and (min-width: 768px) {
      grid-area: 2 / 1 / 6 / 5;
    }
  `,
};

export default styles;
