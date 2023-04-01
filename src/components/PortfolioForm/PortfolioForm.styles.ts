import {css} from '@emotion/css';

const styles = {
  formFields: css`
    color: #ffffff;
    input {
      position: relative;
      padding: 24px 17px;
      border: none;
      -webkit-appearance: none;
      -ms-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: #242424;
      width: 100%;
      height: 43px;
      outline: none;
    }
  `,
  formFieldsBorder: css`
    input {
      border-bottom: solid 1px white;
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }

    input:focus {
      border-bottom: solid 1px #4ee1a0;
    }
  `,
  textareaBorder: css`
    textarea {
      border-bottom: solid 1px white;
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }

    textarea:focus {
      border-bottom: solid 1px #4ee1a0;
    }
  `,
  formFieldsError: css`
    border-bottom: 1px #ff6f5b solid;
  `,
};

export default styles;
