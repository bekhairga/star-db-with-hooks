import React from "react";
import Row from "./row";
import { StarshipsList } from "../sw-list-components";
import { StarshipDetails } from "../sw-details-components";
const StarshipsPage = ({ history, selected }) => {
    return (
        <Row
            left={<StarshipsList onItemSelected={id => history.push(id)} />}
            right={<StarshipDetails itemId={selected} />}
        />
    );
};
export default StarshipsPage;
