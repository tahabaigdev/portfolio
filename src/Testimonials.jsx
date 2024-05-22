import styled from "styled-components";
import { testimonials } from "./constants";
import Title from "./components/Title";

const TestimonialSection = styled.section`
  position: relative;
  z-index: 10;
  padding: 8rem 0;

  .testimonial-container {
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-top: 6rem;

    .testimonial {
      max-width: 56.9rem;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.secondaryColor};

      .profile {
        width: 13rem;
        height: 13rem;
        border-radius: 50%;
        overflow: hidden;
      }

      h3 {
        font-size: 3.2rem;
        font-weight: 500;
        margin-top: 3rem;
      }

      h4 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 3rem;
      }

      p {
        line-height: 3rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .testimonial-container {
      flex-direction: column;
      align-items: center;

      .testimonial {
        padding: 3rem;
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialSection>
      <div className="container">
        <Title headingText="Our Testimonials" />

        <div className="testimonial-container">
          {testimonials.map((item, index) => (
            <div className="testimonial" key={item.id}>
              <div className="profile">
                <img src={item.imgURL} alt="Testimonial Image" />
              </div>

              <h3>{item.title}</h3>

              <h4>{item.subTitle}</h4>

              <p>{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </TestimonialSection>
  );
};

export default Testimonials;
