// import React, { Component } from "react";
import React, { Component } from "react";

const Pagination = props => {
    const changePage = ({ target }) => {
        const page = target.getAttribute("data-key");
        console.log(page);
        props.onPageChange(page);
    };
    let { currentPage, lastPage } = props;
    currentPage = parseInt(currentPage);
    lastPage = parseInt(lastPage);
    let pageButtons = [];
    for (let i = 0; i < lastPage; i++) {
        const buttonElement = (
            <button
                onClick={changePage}
                key={i + 1}
                data-key={i + 1}
                className={
                    currentPage === i + 1
                        ? "btn btn-primary"
                        : "btn btn-secodary"
                }
            >
                {i + 1}
            </button>
        );
        pageButtons.push(buttonElement);
    }
    return pageButtons;
};
export default Pagination;
