import {css} from '@emotion/css';
import PatternRings from '../../images/pattern-rings.svg';

const styles = {
  contactImage: css`
    background-image: url(${PatternRings});
    background-repeat: no-repeat;
    background-position: calc(100% + -188px) calc(100% + -95px);
  `,
};

export default styles;
