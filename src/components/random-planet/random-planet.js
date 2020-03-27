import React, { useState, useEffect } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import PropType from "prop-types";
import ErrorIndicator from "../error-indicator";

const swapi = new SwapiService();
const RandomPlanet = () => {
	const [planet, setPlanet] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
    const updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
		swapi.getPlanet(id).then((res)=> {
                setPlanet(prevPlanet => prevPlanet = {...res});
                setLoading(false);
            }).catch(err => {
                setError(true);
            })
    }

    useEffect(() => {
        const interval = setInterval(() => updatePlanet(), 3000);
        return () => clearInterval(interval);
    },[]);


	if (error) {
		return <ErrorIndicator />;
	}
	const whatToRender = loading ? (
		<Spinner />
	) : (
		<PlanetView
			planet={planet}
			img={swapi.getPlanetImg}
		/>
	);

	return <div className='random-planet jumbotron rounded'>{whatToRender}</div>;
};



function PlanetView({ planet, img }) {
    const { id, name, population, rotationPeriod, diameter } = planet;
    const image = img(id);
	return (
		<React.Fragment>
			<img src={image} alt='' className='planet-image' />
			<div>
				<h4>{name}</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className='term'>Population </span>
						<span>{population}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Rotation Period </span>
						<span>{rotationPeriod}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Diameter </span>
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
