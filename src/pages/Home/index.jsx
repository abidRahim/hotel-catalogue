import Catalogue from "./Catalogue";
import Header from "./Header";
import { catalogueData } from "../../assets/data";

function App() {
  return (
    <div>
      <Header restaurantTitle="Le Meridian" />
      <Catalogue catalogueData={catalogueData} />
    </div>
  );
}

export default App;
