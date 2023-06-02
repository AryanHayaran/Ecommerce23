import axios from "axios";
import { useEffect, useReducer, } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const ACTION = {
  API_REQUEST: "api_request",
  FETCH_DATA: "fetch_data",
  ERROR: "error",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION.API_REQUEST:
      return { ...state, data: [], loading: true };
    case ACTION.FETCH_DATA:
      return { ...state, data:payload, loading: false };
    case ACTION.ERROR:
      return { ...state, data: [], error: payload };
    default:
      return state;
  }
};

const ApiData = (ID) => {
  // const URL = `https://fakestoreapi.com/products/${ID}`;
  const URL = `https://dummyjson.com/products/${ID}`;

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTION.API_REQUEST });
    axios
      .get(URL)
      .then((res) => {
        dispatch({
          type: ACTION.FETCH_DATA,
          payload: res.data,
        });
        //  console.log(res.data);
      })
      .catch((e) => {
        dispatch({ type: ACTION.ERROR, payload: e.error });
      });
  }, [URL]);
  return state
}
export default ApiData; 

