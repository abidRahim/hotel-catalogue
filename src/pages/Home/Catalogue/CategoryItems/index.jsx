import List from "../../../../components/List";
import MenuCard from "./MenuCard";

const CategoryItems = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((item, index) => {
        const { id, name, description, subItems } = item;

        return (
          <List key={id}>
            <MenuCard
              name={name}
              description={description}
              subItems={subItems}
              isLast={index == menuItems.length - 1}
            />
          </List>
        );
      })}
    </ul>
  );
};

export default CategoryItems;
