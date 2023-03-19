import {css} from '@emotion/css';
import PatternRings from '../../images/pattern-rings.svg';

const styles = {
  experienceImage: css`
    background-image: url(${PatternRings});
    background-repeat: no-repeat;
    background-position: calc(100% + 333px) calc(100% + 67px);
  `,
};

export default styles;
