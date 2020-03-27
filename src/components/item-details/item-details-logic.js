/** @format */

import React, { Component } from "react";
import Spinner from "../spinner";
import "./item-details.css";
import ItemDetailsView from "./item-details-view";
import PropType from "prop-types";
import ErrorIndicator from "../error-indicator";
const ItemDetailsLogic = View => {
    return class ItemDetails extends Component {
        state = {
            loading: false,
            item: { id: undefined },
            error: false,
            image: null
        };
        componentDidMount() {
            if (this.props.itemId !== undefined) {
                this.updateItem(
                    this.props.itemId,
                    this.props.getData,
                    this.props.getImage
                );
            }
        }

        componentDidUpdate(prevProps, prevState) {
            if (
                this.props.itemId !== prevProps.itemId ||
                prevState.item.id !== this.state.item.id
            ) {
                this.updateItem(
                    this.props.itemId,
                    this.props.getData,
                    this.props.getImage
                );
            }
        }
        updateItem = (itemId, getData, getImage) => {
            if (null) {
                return;
            }
            this.setState(state => ({
                ...state,
                loading: true
            }));
            getData(itemId)
                .then(res =>
                    this.setState(state => ({
                        loading: false,
                        item: res,
                        error: false,
                        image: getImage(itemId)
                    }))
                )
                .catch(error =>
                    this.setState(state => ({
                        loading: false,
                        item: null,
                        image: null,
                        error: true
                    }))
                );
        };
        componentDidCatch() {
            this.setState({ error: true });
        }
        render() {
            const { loading, item, image, error } = this.state;
            if (this.props.itemId === undefined) {
                return <h3>Please choose a {this.props.type}</h3>;
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
                <View
                    allChildren={this.props.children}
                    image={image}
                    item={item}
                />
            );
        }
    };
};
ItemDetailsLogic.defaultProps = {
    itemId: 1,
    getData: () => {},
    getImage: () => {}
};
ItemDetailsLogic.propTypes = {
    itemId: PropType.number,
    getData: PropType.func,
    getImage: PropType.func
};

export default ItemDetailsLogic(ItemDetailsView);
