import React from "react";
import Row from "./row";
import { PlanetsList } from "../sw-list-components";
import { PlanetDetails } from "../sw-details-components";
const PlanetsPage = ({ selected, history }) => {
    return (
        <Row
            left={<PlanetsList onItemSelected={id => history.push(id)} />}
            right={<PlanetDetails itemId={selected} />}
        />
    );
};
export default PlanetsPage;
