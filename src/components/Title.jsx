import styled from "styled-components";

const Heading = styled.h2`
  font-size: 6.4rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fontFamily.ppObjectSans};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 5rem;
  }
`;

const Title = ({ headingText }) => {
  const text = headingText;
  const splitText = text.split("");

  return (
    <Heading>
      {splitText.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Heading>
  );
};

export default Title;
