import styled from "styled-components";

const StyledSvg = styled.svg`
  transition: transform 0.4s linear;
  transform: ${({ hide }) => (hide ? "rotate(180deg)" : "rotate(0deg)")};
  transform-origin: center center;
  cursor: pointer;
`;

export default StyledSvg;
