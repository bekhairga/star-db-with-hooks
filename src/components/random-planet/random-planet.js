import React from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import PropType from "prop-types";
import ErrorIndicator from "../error-indicator";

class RandomPlanet extends React.Component {
    state = {
        planet: null,
        loading: true,
        error: false
    };
    swapi = new SwapiService();

    componentDidMount() {
        this.interval = setInterval(this.updatePlanet, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidCatch() {
        console.log("Error");
        this.setState(state => ({
            ...state,
            error: true
        }));
    }
    updatePlanet = async () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapi
            .getPlanet(id)
            .then(planet => {
                this.setState(state => ({
                    planet,
                    loading: false,
                    error: false
                }));
            })
            .catch(err => {
                this.setState(state => ({
                    planet: null,
                    loading: false,
                    error: true
                }));
            });
    };

    render() {
        const { planet, loading, error } = this.state;

        if (error) {
            return <ErrorIndicator />;
        }
        const whatToRender = loading ? (
            <Spinner />
        ) : (
            <PlanetView
                planet={planet}
                img={this.swapi.getPlanetImg}
                err={this.throwError}
            />
        );

        return (
            <div className="random-planet jumbotron rounded">
                {whatToRender}
            </div>
        );
    }
}

function PlanetView({ planet, img }) {
    const { id, name, population, rotationPeriod, diameter } = planet;
    const image = img(id);

    return (
        <React.Fragment>
            <img src={image} alt="" className="planet-image" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

PlanetView.defaultProps = {
    planet: null,
    img: () => {}
};
PlanetView.propTypes = {
    planet: PropType.object,
    img: PropType.func
};
export default RandomPlanet;
