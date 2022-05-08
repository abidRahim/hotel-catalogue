import Flex from "../../../../../components/Flex";
import Text from "../../../../../components/Text";

const SubItems = ({ subItems }) => {
  return subItems.map((item) => {
    const { id, name, price, cuisine_name, discount, tags } = item;

    return (
      <Flex key={id} margin="0 0 0 16px" flexDirection="column">
        <Text>{name}</Text>
      </Flex>
    );
  });
};

export default SubItems;
