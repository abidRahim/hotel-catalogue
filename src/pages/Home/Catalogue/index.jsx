import CategoryItems from "./CategoryItems";
import Accordion from "../../../components/Accordion";
import Text from "../../../components/Text";

const Catalogue = ({ catalogueData }) => {
  const { categorys } = catalogueData;

  return (
    <>
      <Text fontSize="2.4rem" margin="16px 8px" textDecoration="underline">
        Menu Catalogue:
      </Text>
      {categorys.map((category) => {
        const { id, name, menuItems } = category;

        return (
          <Accordion
            key={id}
            titleComponent={
              <Text fontSize="1.8rem" fontWeight="500" margin="4px">
                {name}
              </Text>
            }
            titleWidth="60%">
            <CategoryItems menuItems={menuItems} />
          </Accordion>
        );
      })}
    </>
  );
};

export default Catalogue;
