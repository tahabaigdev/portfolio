import styled from "styled-components";
import { navLinks, socialLinks } from "../constants";
import ToTopBtn from "./ToTopBtn";
import { useState } from "react";

const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 1.2rem 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
  transition: all 0.3s ease-in;

  &.active {
    background-color: ${({ theme }) => theme.colors.blackColor};
  }

  .left,
  .center,
  .right {
    flex-basis: 33.33%;
  }

  .center {
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
  }

  .right {
    .nav-list {
      display: flex;
      align-items: center;
      float: inline-end;
      gap: 3rem;
      transition: all 200ms ease-in;

      &:hover .nav-link button {
        opacity: 0.2;
      }

      .nav-link button {
        all: unset;
        font-size: 1.4rem;
        text-transform: uppercase;
        transition: all 200ms ease-in;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    .center {
      display: none;
    }

    .right {
      .nav-list {
        gap: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding: 1.2rem 2rem;
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  const scrollHandler = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderSection className={isActive ? "active" : ""}>
      <div className="left">
        <ToTopBtn btnText="TAHABAIG'" />
      </div>

      <div className="center">
        <ul className="social-link">
          {socialLinks.map((item, index) => (
            <li key={item.id}>
              <a href={item.linkURL}>
                <img src={item.iconURL} alt="icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="right">
        <ul className="nav-list">
          {navLinks.map((item, index) => (
            <li key={item.id} className="nav-link">
              <button onClick={() => scrollHandler(item.arg)}>
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </HeaderSection>
  );
};

export default Header;
