import { POSTCHILD, GETCHILD, FATCHING, GETONECHILD } from "../type";
import axios from "axios";

export const postChildData = (child) => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  try {
    const { data } = await axios({
      method: "post",
      url: `/child`,
      data: child,
      headers: {
        authorization: user.token,
      },
    });
    dispatch({
      type: POSTCHILD,
      payload: data.child,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POSTCHILD,
      payload: {
        error: error.response.data.error,
      },
    });
  }
};

export const getChildData = () => async (dispatch, getState) => {
  try {
    const { user } = getState().userReducer;
    dispatch({ type: FATCHING });
    const { data } = await axios(`/child/get`, {
      headers: {
        authorization: user.token,
      },
    });
    dispatch({
      type: GETCHILD,
      payload: data,
    });
    //console.log(data)
  } catch (error) {
    console.log(error);
  }
};

export const oneChildData = (id) => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  try {
    const { data } = await axios(`/child/${id}`, {
      headers: {
        authorization: user.token,
      },
    });
    dispatch({
      type: GETONECHILD,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
