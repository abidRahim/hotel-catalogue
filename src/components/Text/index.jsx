import styled from "styled-components";

const Text = styled.p`
  margin: ${({ margin }) => (margin ? margin : 0)};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

export default Text;
