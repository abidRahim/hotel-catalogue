import styled from "styled-components";
import Flex from "../../../../../components/Flex";
import Tag from "../../../../../components/Tag";
import Text from "../../../../../components/Text";

const MenuCard = ({ name, description, subItems, isLast }) => {
  const MenuCardWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    border-bottom: ${({ isLastItem }) => !isLastItem && "0.5px solid #d4d5d9"};
    padding: 12px 16px;
    margin: 0 0 12px 16px;
  `;

  return (
    <MenuCardWrapper isLastItem={isLast}>
      <Text fontSize="1.2rem" fontWeight="600">
        {name}
      </Text>
      <Text fontSize="0.9rem" fontWeight="300">
        {description}
      </Text>

      {subItems.map((tag) => {
        const { id, name, price } = tag;
        return (
          <Tag key={id}>
            <Flex columnGap="12px" alignItem="center">
              <Text fontSize="1.5rem" fontWeight="900">
                +
              </Text>
              <Flex flexDirection="column">
                <Text fontWeight="300">{name}</Text>
                <Text fontWeight="700">₹{price}</Text>
              </Flex>
            </Flex>
          </Tag>
        );
      })}
    </MenuCardWrapper>
  );
};

export default MenuCard;
