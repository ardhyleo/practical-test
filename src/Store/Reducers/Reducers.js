import { GET_DATA_BEGIN, GET_DATA_FAIL, GET_DATA_SUCCESS } from "../Action/ActionTypes";

const intialState = {
  data: [],
  loading: false,
  error: null,
};
const dataReducer = (state = intialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case GET_DATA_FAIL:
      return {
        data: [],
        loading: false,
        error: error,
      };
  }
};

export default dataReducer;
