import { TOGGLE_TAB } from "../constants/tabConstant";

export const toggleTab = (index ) => ({
    type: TOGGLE_TAB,
    payload: index,
  });
