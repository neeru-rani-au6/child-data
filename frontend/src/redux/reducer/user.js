import { LOGIN, LOGOUT } from "../type";

const initalstate = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isAuthenticated: localStorage.getItem("isAuth") || false,
  data: null,
  error: null,
};

const userReducer = (state = initalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      if (payload.user) {
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("isAuth", true);
      }
      return Object.assign(state, payload);
    case LOGOUT:
      console.log(payload);
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("userJwtToken");
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default userReducer;
