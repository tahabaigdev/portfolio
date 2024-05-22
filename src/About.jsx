import styled from "styled-components";
import Title from "./components/Title";
import aboutImg from "/images/homepage/me.jpg";

const AboutSection = styled.section`
  padding-top: 5rem;
  position: relative;
  z-index: 10;

  .grid {
    margin-top: 10rem;
    gap: 15rem;

    .grid-col {
      p {
        font-size: 1.8rem;
        line-height: 3rem;

        button {
          all: unset;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }
      }

      img {
        max-width: 80%;
        float: right;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .grid {
      gap: 5rem;
      margin-top: 6rem;

      .grid-col {
        p {
          text-align: center;
        }

        img {
          float: none;
          margin-inline: auto;
        }
      }
    }
  }
`;

const About = () => {
  const scrollHandler = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AboutSection id="about">
      <div className="container">
        <Title headingText="Who Am I" />

        <div className="grid">
          <div className="grid-col">
            <p>
              Greetings! <br /> <br /> My name is Taha Baig I am a Self-Taught
              Frontend Developer based in Hyderabad, Pakistan. I am passionate
              about creating and learning new things to boost my development
              career. I am currently working in Creative Cycle. <br /> <br /> I
              am here to listen and answer your questions. Your thoughts and
              time matter to us. Feel free to{" "}
              <button onClick={() => scrollHandler("contact")}>reach</button> me
              I look forward to connecting with you!
            </p>
          </div>
          <div className="grid-col">
            <img src={aboutImg} alt="Taha Baig Image" />
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
