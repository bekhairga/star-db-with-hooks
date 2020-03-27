/** @format */

import React, { useReducer,useEffect } from "react";
import Spinner from "../spinner";
import "./item-details.css";
import ItemDetailsView from "./item-details-view";
import PropType from "prop-types";
import ErrorIndicator from "../error-indicator";
import reducer from './item-details-reducer'
import  {
  detailsError,
  detailsRequest,
  detailsSuccess
} from './item-details-actions';
import inititalState from './item-details-store';

const ItemDetailsLogic = (props) => {
        const [state, dispatch] = useReducer(reducer,inititalState);
        const {getData, itemId, getImage} = props;

        const updateItem = (itemId, getData, getImage) => {
            if(itemId !== undefined){
                dispatch(detailsRequest());
                getData(itemId).then(res => {
               const image = getImage(itemId);
               dispatch(detailsSuccess(image, res));
                }).catch(error => {
               
                dispatch(detailsError());
                })
            }
            
        }

        useEffect(() => { 
        updateItem(itemId, getData, getImage);
        }, [itemId, getData, getImage]);

        const {loading, image, data, error} = state;
       
            if (itemId === undefined) {
                return <h3>Please choose a {props.type}</h3>;
            }
            if (loading) {
                return (
                    <div>
                        <Spinner />
                    </div>
                );
            }
            if (error) {
        
                return <ErrorIndicator />;
            }
            return (
                <ItemDetailsView
                    allChildren={props.children}
                    image={image}
                    item={data}
                />
            );
}


ItemDetailsLogic.defaultProps = {
    itemId: undefined,
    getData: () => {},
    getImage: () => {}
};
ItemDetailsLogic.propTypes = {
    itemId: PropType.oneOfType([
        PropType.string,
        PropType.number
    ]),
    getData: PropType.func,
    getImage: PropType.func
};

export default ItemDetailsLogic;
