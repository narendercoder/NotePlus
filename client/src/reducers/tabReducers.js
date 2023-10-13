import { TOGGLE_TAB } from "../constants/tabConstant";

const initialstate = 2

const tabReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return state = action.payload;

    default:
      return state;
  }
};

export default tabReducer;
