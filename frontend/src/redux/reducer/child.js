import { POSTCHILD, GETCHILD, GETONECHILD } from "../type";

const initalstate = {
  child: [],
  currentChild: null,
};

const childReducer = (state = initalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTCHILD:
      return { ...state, child: [...state.child, payload] };
    case GETCHILD:
      return { ...state, child: payload };
    case GETONECHILD:
      return { ...state, currentChild: payload };
    default:
      return state;
  }
};

export default childReducer;
