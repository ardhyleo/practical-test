import { GET_DATA_BEGIN, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./ActionTypes";

export const getDataStart = () => {
  return {
    type: GET_DATA_BEGIN,
  };
};

export const getDataSuccess = () => {
  return {
    type: GET_DATA_SUCCESS,
  };
};

export const getDataFail = () => {
  return {
    type: GET_DATA_FAIL,
  };
};
