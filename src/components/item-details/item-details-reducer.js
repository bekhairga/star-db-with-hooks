import {
    FETCH_DETAILS_FAILURE,
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_SUCCESS
  } from './item-details.constants';
const reducer = (state, action) => {
    switch(action.type){
      case FETCH_DETAILS_REQUEST:
        return {
          ...state, loading: true
        }
      case FETCH_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data,
          image: action.image
        }
      case FETCH_DETAILS_FAILURE:
        return{
          ...state,
          error: true
        }
      default:
        return state;
    }

}
export default reducer;