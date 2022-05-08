import styled from "styled-components";

const Tag = ({ children }) => {
  const TagWrapper = styled.div`
    display: inline-block;
    width: fit-content;
    margin: 12px 16px 8px 0;
    background-color: salmon;
    color: white;
    border-radius: 8px;
    padding: 8px 20px;
    cursor: pointer;
  `;

  return <TagWrapper>{children}</TagWrapper>;
};
export default Tag;
