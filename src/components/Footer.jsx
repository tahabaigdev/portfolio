import styled from "styled-components";
import { socialLinks } from "../constants";
import ToTopBtn from "./ToTopBtn";

const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 1.2rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryColor};

  .left,
  .center,
  .right {
    flex-basis: 33.33%;
  }

  .left {
    p {
      font-size: 1.4rem;
    }
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
    display: flex;
    justify-content: end;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
    row-gap: 1.5rem;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="left">
        <p>© 2024, DESIGNED AND DEVELOPED BY TAHABAIG</p>
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
        <ToTopBtn btnText="BACK TO TOP" />
      </div>
    </FooterSection>
  );
};

export default Footer;
