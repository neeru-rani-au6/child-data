import { GETSTATE, GETDISTRICT, POSTSTATE, POSTDISTRICT } from "../type";

const initalstate = {
  allState: [],
  district: [],
};

const addressReducer = (state = initalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTSTATE:
      return { ...state, allState: [...state.allState, payload] };
    case GETSTATE:
      return { ...state, allState: payload };
    case POSTDISTRICT:
      return { ...state, district: [...state.district, payload] };
    case GETDISTRICT:
      return { ...state, district: payload };
    default:
      return state;
  }
};

export default addressReducer;
