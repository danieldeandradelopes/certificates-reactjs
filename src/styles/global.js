import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: #b48fbf;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 14px sans-serif;
    }
    #root {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 80%;
      max-height: 80%;
      margin: 0 auto;
    }
    button {
        cursor: pointer;
    }
`;
