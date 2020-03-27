import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS
} from './item-details.constants';
const detailsRequest = () => {
    return {
      type: FETCH_DETAILS_REQUEST
    }
  }
  const detailsSuccess = (image, data) => {
    return {
      type: FETCH_DETAILS_SUCCESS,
      image: image,
      data: data
    }
  }
  const detailsError = () => {
    return {
      type: FETCH_DETAILS_FAILURE
    }
  }
  export {
      detailsError,
      detailsRequest,
      detailsSuccess
  }