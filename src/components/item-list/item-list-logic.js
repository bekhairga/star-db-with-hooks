import React, { Component } from "react";
import Spinner from "../spinner";
import ItemListView from "./item-list-view";
import PropType from "prop-types";
import Pagination from "../pagination";

const ItemListLogic = View => {
    return class ItemList extends Component {
        state = {
            data: {},
            loading: true,
            catch: false,
            currentPage: 1,
            lastPage: null
        };
        componentDidMount() {
            this.setState(state => ({ ...state, loading: true }));
            this.props
                .getData(this.state.currentPage)
                .then(res =>
                    this.setState(state => ({
                        loading: false,
                        data: res,
                        error: false,
                        currentPage: 1,
                        lastPage: Math.round(res.count / 10)
                    }))
                )
                .catch(err =>
                    this.setState(state => ({
                        loading: false,
                        data: null,
                        error: true,
                        page: null
                    }))
                );
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.currentPage !== this.state.currentPage) {
                this.onPageChange(this.state.currentPage);
                this.props
                    .getData(this.state.currentPage)
                    .then(res =>
                        this.setState(state => ({
                            loading: false,
                            data: res,
                            error: false,
                            currentPage: this.state.currentPage,
                            lastPage: Math.round(res.count / 10)
                        }))
                    )
                    .catch(error =>
                        this.setState(state => ({
                            loading: false,
                            data: null,
                            error: error,
                            page: null
                        }))
                    );
            }
        }

        onPageChange = page => {
            this.setState(state => ({
                ...state,
                loading: true,
                currentPage: page
            }));
        };

        render() {
            const { loading, data, currentPage, lastPage } = this.state;
            console.log(this.state);
            const { onItemSelected } = this.props;
            const renderingItems = loading ? (
                <Spinner />
            ) : (
                <View data={data} onItemSelected={onItemSelected} />
            );
            return (
                <div>
                    <ul className="item-list list-group">{renderingItems}</ul>
                    <Pagination
                        currentPage={currentPage}
                        lastPage={lastPage}
                        onPageChange={this.onPageChange}
                    />
                </div>
            );
        }
    };
};

ItemListLogic.defaultProps = {
    onItemSelected: () => {}
};
ItemListLogic.propTypes = {
    onItemSelected: PropType.func
};
export default ItemListLogic(ItemListView);
