import styled, { keyframes } from "styled-components";

const scrollerAnimation = keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
`;

const scrollDownAnimate = keyframes`
  0% {
    transform-origin: top;
    transform: scaleY(0);
  }

  50% {
    transform-origin: top;
    transform: scaleY(1);
  }

  51% {
    transform-origin: bottom;
    transform: scaleY(1);
  }

  100% {
    transform-origin: bottom;
    transform: scaleY(0);
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.blackColor};

  .scroller {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .scroller-in {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      animation: ${scrollerAnimation} 800s linear infinite;

      span {
        display: inline-block;
        font-size: 60rem;
        font-weight: 900;
        line-height: 50rem;
        padding-inline: 4rem;
        opacity: 1%;
        letter-spacing: 0;
      }
    }
  }

  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 10;

    h1 {
      font-size: 9.6rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.fontFamily.ppObjectSans};
      max-width: 99.3rem;
      line-height: 10.5rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      max-width: 70rem;
      margin-top: 3rem;
    }

    .scrollDownIndicator {
      width: 1.3px;
      height: 100px;
      background-color: transparent;
      position: relative;
      top: 13rem;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(transparent, #f1e9db, transparent);
        animation: ${scrollDownAnimate} 3s linear infinite;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .scroller {
      .scroller-in {
        span {
          font-size: 45rem;
        }
      }
    }

    .hero-content {
      h1 {
        font-size: 8rem;
        line-height: 9rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    .scroller {
      .scroller-in {
        span {
          font-size: 40rem;
        }
      }
    }

    .hero-content {
      h1 {
        font-size: 6rem;
        line-height: 8rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    .scroller {
      .scroller-in {
        span {
          font-size: 30rem;
        }
      }
    }

    .hero-content {
      h1 {
        font-size: 4rem;
        line-height: 5rem;
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <div className="scroller">
        <div className="scroller-in">
          {[
            "html",
            "css",
            "sass/scss",
            "bootsrap",
            "tailwindcss",
            "javascript",
            "reactjs",
            "styled components",
            "gsap",
            "figma",
          ].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="scroller-in">
          {[
            "html",
            "css",
            "sass/scss",
            "bootsrap",
            "tailwindcss",
            "javascript",
            "reactjs",
            "styled components",
            "gsap",
            "figma",
          ].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <h1>Hi, I’m Taha, a frontend developer</h1>

        <p>
          I add value to web development projects by combining technical skill
          with creative design and aesthetics.
        </p>

        <div className="scrollDownIndicator"></div>
      </div>
    </HeroSection>
  );
};

export default Hero;
