import styled from "styled-components";

const TopBtn = styled.button`
  all: unset;
  font-size: 1.4rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const ToTopBtn = ({ btnText }) => {
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return <TopBtn onClick={backToTop}>{btnText}</TopBtn>;
};

export default ToTopBtn;
