 import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
    :root {
        /* produto */
        --background: #202024;
        --green-dark: #015F43;
        --green: #00875F;
        --green-light: #00B37E;
        --red-dark: #AA2834;
        --red: #F75A68;
        --blue-light: #6933FF;
        
        /* base */
        --gray1: #121214;
        --gray2: #202024;
        --gray3: #29292E;
        --gray4: #323238;
        --gray5: #7C7C8A;
        --gray6: #C4C4CC;
        --gray7: #E1E1E6;
        --white: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    
    button {
      font-weight: 600;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.75);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
    }

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
 `