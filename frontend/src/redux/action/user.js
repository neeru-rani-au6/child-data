import { LOGIN, LOGOUT } from "../type";
import axios from "axios";

export const loginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `/users`,
      data: {
        email: user.email,
        name: user.name,
      },
    });
    dispatch({
      type: LOGIN,
      payload: { user: data, isAuthenticated: true },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN,
      payload: {
        error: error.response.data.error,
        info: null,
        isAuthenticated: false,
        user: null,
      },
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  const { user } = getState().userReducer;
  try {
    await axios({
      method: "delete",
      url: `/logout`,
      headers: {
        authorization: user.token,
      },
    });
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  } catch (error) {
    console.log(error);
  }
};
