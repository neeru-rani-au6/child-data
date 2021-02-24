import {
  GETSTATE,
  POSTSTATE,
  GETDISTRICT,
  POSTDISTRICT,
  FATCHING,
} from "../type";
import axios from "axios";

export const postState = (state) => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  try {
    const { data } = await axios({
      method: "post",
      url: `/address/state`,
      data: state,
      headers: {
        authorization: user.token,
      },
    });
    console.log(data);
    dispatch({
      type: POSTSTATE,
      payload: data.result,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POSTSTATE,
      payload: {
        error: error.response,
      },
    });
  }
};

export const getState = () => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  try {
    dispatch({ type: FATCHING });
    const { data } = await axios(`/address/getState`, {
      headers: {
        authorization: user.token,
      },
    });
    dispatch({
      type: GETSTATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postDistrict = (district) => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  try {
    const { data } = await axios({
      method: "post",
      url: `/address/district`,
      data: district,
      headers: {
        authorization: user.token,
      },
    });
    console.log(data);
    dispatch({
      type: POSTDISTRICT,
      payload: data.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDistrict = () => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  try {
    dispatch({ type: FATCHING });
    const { data } = await axios(`/address/getDistrict`, {
      headers: {
        authorization: user.token,
      },
    });
    dispatch({
      type: GETDISTRICT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
