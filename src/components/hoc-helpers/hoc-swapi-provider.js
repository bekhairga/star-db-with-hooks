import React from "react";
import SwapiContext from "../../services/swapi-service-context";
const withSwapiServiceConsumer = mapMethodsToProps => Wrapped => {
    return props => {
        return (
            <SwapiContext.Consumer>
                {SwapiService => {
                    const services = mapMethodsToProps(SwapiService);
                    return <Wrapped {...services} {...props} />;
                }}
            </SwapiContext.Consumer>
        );
    };
};
export default withSwapiServiceConsumer;
