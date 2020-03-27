import React from "react";
import { withSwapiServiceConsumer } from "../hoc-helpers";
import Record from "./record";
import ItemDetails from "../item-details";

const mapPlanetsMethodsToProps = swapi => {
    return {
        getData: swapi.getPlanet,
        getImage: swapi.getPlanetImg,
        type: "planet"
    };
};

const planetDetailsData = props => {
    return (
        <ItemDetails {...props}>
            <Record label="Diameter" field="diameter" />
            <Record label="Population" field="population" />
            <Record label="Rotation Period" field="rotationPeriod" />
        </ItemDetails>
    );
};

const PlanetSets = List => {
    return withSwapiServiceConsumer(mapPlanetsMethodsToProps)(List);
};

const PlanetDetails = PlanetSets(planetDetailsData);

export default PlanetDetails;
