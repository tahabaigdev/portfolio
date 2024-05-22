import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "PPObjectSans-Regular";
    src: url("../fonts/PPObjectSans/PPObjectSans-Regular.woff2") format("woff2");
    font-display: swap;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fontFamily.robotoMono};
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    letter-spacing: 0.7px;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
  }

  ul {
    list-style: none;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
    transition: all .3s ease-in;
  }

  .container {
    max-width: 128rem;
    margin-inline: auto;
  }

  .grained-bg {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.03;
    background: url(../images/bg/noise.gif);
    z-index: 9;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.screens.xl}) {
    .container {
      padding: 0 4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    html {
      font-size: 55%;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    html {
      font-size: 50%;
    }

    .container {
      padding: 0 2rem;
    }
  }
`;
