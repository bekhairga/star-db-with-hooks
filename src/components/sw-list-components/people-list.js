import { withSwapiServiceConsumer } from "../hoc-helpers";
import ItemList from "../item-list";

const mapPeopleMethodsToProps = swapi => {
    return {
        getData: swapi.getAllPeople
    };
};
const PeopleSets = List => {
    return withSwapiServiceConsumer(mapPeopleMethodsToProps)(List);
};

const PeopleList = PeopleSets(ItemList);
export default PeopleList;
