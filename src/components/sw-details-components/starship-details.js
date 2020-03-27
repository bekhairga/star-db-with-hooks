import React from "react";
import { withSwapiServiceConsumer } from "../hoc-helpers";
import Record from "./record";
import ItemDetails from "../item-details";

const mapStarshipMethodsToProps = swapi => {
    return {
        getData: swapi.getStarship,
        getImage: swapi.getStarshipImg,
        type: "starship"
    };
};

const starshipDetailsData = props => {
    return (
        <ItemDetails {...props}>
            <Record label="Model" field="model" />
            <Record label="Cost in Credits" field="costInCredits" />
            <Record label="Length" field="length" />
            <Record label="Passengers" field="passengers" />
        </ItemDetails>
    );
};

const StarshipSets = List => {
    return withSwapiServiceConsumer(mapStarshipMethodsToProps)(List);
};

const StarshipDetails = StarshipSets(starshipDetailsData);

export default StarshipDetails;
