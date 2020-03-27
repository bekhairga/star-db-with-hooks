import React, {useReducer, useEffect} from "react";
import Spinner from "../spinner";
import ItemListView from "./item-list-view";
import PropType from "prop-types";
import Pagination from "../pagination";
import reducer from './item-list-reducer';
import {
  listError,
  listRequest,
  listSuccess,
  changePage
} from './item-list-actions';
import inititalState from './item-list-store';


const ItemListLogic = props => {
  const {getData,onItemSelected} = props;
  const [state, dispatch] = useReducer(reducer, inititalState);
  useEffect(() => {
    dispatch(listRequest());
    getData(state.currentPage).then(res => {
      const data = res;
      const lastPage = Math.round(res.count / 10);
      dispatch(listSuccess(lastPage, data));
    }).catch(err => {
      dispatch(listError());
    })
  }, [state.currentPage, getData]);
  const {currentPage, lastPage, data, loading} = state;
  const onPageChange = (page) => {
    dispatch(changePage(page));
  }

  const renderingItems = loading ? (
    <Spinner />
  ) : (
    <ItemListView data={data} onItemSelected={onItemSelected} />
  );
 
  return (
    <div>
      <ul className="item-list list-group">{renderingItems}</ul>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

ItemListLogic.defaultProps = {
  onItemSelected: () => {}
};
ItemListLogic.propTypes = {
  onItemSelected: PropType.func
};
export default ItemListLogic;
