import {FETCH_LIST_REQUEST,FETCH_LIST_SUCCESS,FETCH_LIST_FAILURE,CHANGE_PAGE} from './item-list-constants';
const reducer = (state, action) => {
    switch(action.type){
      case FETCH_LIST_REQUEST:
        return {
          ...state, loading: true
        }
      case FETCH_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data,
          lastPage: action.lastPage
        }
      case FETCH_LIST_FAILURE:
        return{
          ...state,
          error: true
        }
      case CHANGE_PAGE:
        return{
          ...state, 
          currentPage: action.page
        }
      default:
        return state;
    }
}
export default reducer;