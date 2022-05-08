import { forwardRef } from "react";
import styled from "styled-components";

const FlexStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  overflow: ${({ overflow }) => overflow};
  align-items: ${({ alignItem }) => alignItem};
  flex-direction: ${({ flexDirection }) => flexDirection};
  background: ${({ background }) => background};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: ${({ cursor }) => cursor};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  /* 'customCss' should always be kept in the last for cascading purposes */
  ${({ customCss }) => customCss};
`;

const Flex = forwardRef(function FlexComponent({ children, ...props }, ref) {
  return (
    <FlexStyled {...props} ref={ref}>
      {children}
    </FlexStyled>
  );
});

export default Flex;
