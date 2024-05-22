import styled from "styled-components";
import phoneIcon from "/images/icons/phone.svg";

const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 8rem 0;

  .content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      font-size: 10rem;
      font-weight: 300;
      font-family: ${({ theme }) => theme.fontFamily.ppObjectSans};
      line-height: 95%;
      color: ${({ theme }) => theme.colors.secondaryColor};
      max-width: 100rem;

      strong {
        font-weight: 900;
      }
    }

    p {
      font-size: 2.2rem;
      margin-top: 5rem;
      color: ${({ theme }) => theme.colors.secondaryColor};
    }

    .contact-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.6rem;
      margin-top: 5rem;

      a {
        min-height: 6rem;
        padding: 0 3rem;
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background-color: ${({ theme }) => theme.colors.secondaryColor};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .content {
      h3 {
        font-size: 7rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    .content {
      h3 {
        font-size: 5rem;
        line-height: 100%;
      }

      .contact-box {
        flex-direction: column;
        align-items: center;
        row-gap: 1rem;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="container">
        <div className="content">
          <h3>
            Let's <strong>build</strong> the next big thing{" "}
            <strong>together</strong>
          </h3>

          <p>What's your preferred channel for meaningful conversations?</p>

          <div className="contact-box">
            <a href="tel:+923272267139">
              <img src={phoneIcon} alt="icon" /> +92 3272267139
            </a>

            <a href="mailto:connectmtb@gmail.com">
              <span>@</span> connectmtb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
