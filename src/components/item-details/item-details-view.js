import React from "react";
import PropType from "prop-types";
const ItemDetailsView = ({ item, image, allChildren }) => {
    return (
        <div className="item-details card">
            <img
                src={image}
                alt="something went wrong"
                className="item-image"
            />
            <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(allChildren, child => {
                        return React.cloneElement(child, { item });
                    })}
                </ul>
            </div>
        </div>
    );
};
ItemDetailsView.defaultProps = {
    item: {},
    image: null,
    allChildren: {}
};
ItemDetailsView.propTypes = {
    item: PropType.object,
    image: PropType.string,
    allChildren: PropType.node
};
export default ItemDetailsView;
