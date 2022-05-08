import styled from "styled-components";

const HeaderStyled = styled.header`
  background: #eb3b3b;
  color: white;
  padding: 4px 24px;
`;

const Header = ({ restaurantTitle }) => (
  <HeaderStyled>
    <h1>{restaurantTitle}</h1>
  </HeaderStyled>
);

export default Header;
