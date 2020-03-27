import { withSwapiServiceConsumer } from "../hoc-helpers";
import ItemList from "../item-list";
const mapStarshipsMethodsToProps = swapi => {
    return {
        getData: swapi.getAllStarships
    };
};

const StarshipsSets = List => {
    return withSwapiServiceConsumer(mapStarshipsMethodsToProps)(List);
};

const StarshipsList = StarshipsSets(ItemList);
export default StarshipsList;
