import styled from "styled-components";
import Title from "./components/Title";
import { projects } from "./constants";

const ProjectSection = styled.section`
  padding: 10rem 0;
  position: relative;
  z-index: 10;

  .flex {
    display: flex;
    align-items: flex-end;
    gap: 3rem;

    &:nth-child(2) {
      margin-top: 10rem;
    }

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    &:not(:last-child) {
      margin-bottom: 10rem;
    }

    .flex-col {
      &:nth-child(1) {
        flex-basis: 65%;

        &:hover > a > img {
          scale: 1.03;
        }

        a {
          display: block;
        }
      }

      &:nth-child(2) {
        flex-basis: 35%;

        .content {
          h5 {
            font-size: 1.8rem;
            font-weight: 400;
          }

          h4 {
            font-size: 3.2rem;
            font-weight: 600;
            margin: 1rem 0;
          }

          a {
            font-weight: 500;
            letter-spacing: 0;
            min-width: 17rem;
            min-height: 5rem;
            margin-top: 2rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background-color: ${({ theme }) => theme.colors.primaryColor};
            color: ${({ theme }) => theme.colors.secondaryColor};

            &:hover > img {
              transform: translateX(3px);
            }
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .flex {
      flex-direction: column;
      align-items: flex-start;

      &:nth-child(odd) {
        flex-direction: column;
      }
    }
  }
`;

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <div className="container">
        <Title headingText="My Projects Showcase" />

        {projects.map((item, index) => (
          <div className="flex" key={item.id}>
            <div className="flex-col">
              <a href={item.linkURL}>
                <img src={item.imgURL} alt="Project Image" />
              </a>
            </div>

            <div className="flex-col">
              <div className="content">
                <h5>{item.title}</h5>
                <h4>{item.subTitle}</h4>
                <h5>{item.details}</h5>
                <a href={item.linkURL}>
                  {item.btnText} <img src={item.iconURL} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProjectSection>
  );
};

export default Projects;
