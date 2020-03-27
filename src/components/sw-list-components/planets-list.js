import { withSwapiServiceConsumer } from "../hoc-helpers";
import ItemList from "../item-list";

const mapPlanetsMethodsToProps = swapi => {
    return {
        getData: swapi.getAllPlanets
    };
};

const PlanetsSets = List => {
    return withSwapiServiceConsumer(mapPlanetsMethodsToProps)(List);
};

const PlanetsList = PlanetsSets(ItemList);
export default PlanetsList;
