import {FETCH_LIST_REQUEST,FETCH_LIST_SUCCESS,FETCH_LIST_FAILURE,CHANGE_PAGE} from './item-list-constants';
const listRequest = () => {
    return {
      type: FETCH_LIST_REQUEST
    }
  }
  const listSuccess = (lastPage, data) => {
    return {
      type: FETCH_LIST_SUCCESS,
      lastPage: lastPage,
      data: data
    }
  }
  const listError = () => {
    return {
      type: FETCH_LIST_FAILURE
    }
  }
  const changePage = (page) => {
    return{
      type: CHANGE_PAGE,
      page: page
    }
  }
  export {
      listError,
      listRequest,
      listSuccess,
      changePage
  }