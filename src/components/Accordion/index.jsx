import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import StyledSvg from "../SVG";

const AccordionWrapper = styled.div`
  box-sizing: border-box;
  padding: ${({ expanded }) => (expanded ? "12px 0" : 0)};
  margin: 0 8px;
  transition: padding 0.4s ease-out;
`;

const AccordionChild = styled.div`
  max-height: ${({ expanded, height }) => (expanded ? height : 0)}px;
  transition: max-height 0.4s ease-out;
  width: ${({ width }) => width};
  overflow: hidden;
`;

const Accordion = ({ titleComponent, titleWidth, children }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const { scrollHeight } = ref.current;
      setHeight(scrollHeight);
    }
  }, [ref.current, isActive]);

  return (
    <AccordionWrapper expanded={isActive}>
      <Flex
        width={titleWidth}
        columnGap="16px"
        alignItem="center"
        onClick={() => setIsActive((state) => !state)}
        cursor="pointer"
        justifyContent="space-between">
        <span>{titleComponent}</span>
        <StyledSvg viewBox="0 0 16px 16px" width="17px" height="17px" hide={!isActive}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 1.5C13.1421 1.5 16.5 4.85787 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3ZM6.21967 8.78033C5.92678 8.48744 5.92678 8.01256 6.21967 7.71967C6.51256 7.42678 6.98744 7.42678 7.28033 7.71967L9 9.43934L10.7197 7.71967C11.0126 7.42678 11.4874 7.42678 11.7803 7.71967C12.0732 8.01256 12.0732 8.48744 11.7803 8.78033L9.53033 11.0303C9.23744 11.3232 8.76256 11.3232 8.46967 11.0303L6.21967 8.78033Z"
            fill="#868686"
          />
        </StyledSvg>
      </Flex>
      <AccordionChild ref={ref} expanded={isActive} height={height} width={titleWidth}>
        {children}
      </AccordionChild>
    </AccordionWrapper>
  );
};

export default Accordion;
