import { SELECTED_CATEGORY } from "../constants/categoryConstants";


export const selectCategory = (category ) => ({
    type: SELECTED_CATEGORY,
    payload: category,
  });
