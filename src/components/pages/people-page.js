import React from "react";
import Row from "./row";
import { PeopleList } from "../sw-list-components";
import { PersonDetails } from "../sw-details-components";
import { withRouter } from "react-router-dom";
const PeoplePage = ({ selected, history, match }) => {
    return (
        <Row
            left={<PeopleList onItemSelected={id => history.push(id)} />}
            right={<PersonDetails itemId={selected} />}
        />
    );
};
export default withRouter(PeoplePage);
