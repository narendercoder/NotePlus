import { SELECTED_CATEGORY } from "../constants/categoryConstants";

const initialstate = "Personal"

const categoryReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return state = action.payload;

    default:
      return state;
  }
};

export default categoryReducer;
