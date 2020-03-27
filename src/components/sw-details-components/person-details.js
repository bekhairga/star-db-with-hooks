import React from "react";
import { withSwapiServiceConsumer } from "../hoc-helpers";
import Record from "./record";
import ItemDetails from "../item-details";

const mapPersonMethodsToProps = swapi => {
    return {
        getData: swapi.getPerson,
        getImage: swapi.getPersonImg,
        type: "character"
    };
};

const personDetailsData = props => {
    return (
        <ItemDetails {...props}>
            <Record label="Birth Year" field="birthYear" />
            <Record label="Gender" field="gender" />
            <Record label="Eye Color" field="eyeColor" />
        </ItemDetails>
    );
};

const PersonSets = List => {
    return withSwapiServiceConsumer(mapPersonMethodsToProps)(List);
};

const PersonDetails = PersonSets(personDetailsData);

export default PersonDetails;
