/** @format */

import React from "react";
import "./item-list.css";
import PropType from "prop-types";

const ItemListView = ({ data, onItemSelected, page, changePage, url }) => {
    const items = data.results.map(item => (
        <li
            onClick={() => onItemSelected(item.id)}
            className="list-group-item"
            key={item.id}
        >
            {item.name}
        </li>
    ));
    return items;
};
ItemListView.defaultProps = {
    data: {},
    onItemSelected: () => {}
};
ItemListView.propTypes = {
    data: PropType.object,
    onItemSelected: PropType.func
};
export default ItemListView;
