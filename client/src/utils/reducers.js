import { useReducer } from "react";

import { ADD_MEETING, DELETE_MEETING } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MEETING:
      return {
        ...state,
        meetings: [...action.meetings],
      };
    case DELETE_MEETING:
      return {
        ...state,
        meetings: [...action.meetings],
      };
    default:
      return state;
  }
};

export function useMeetingReducer(initialState) {
  return useReducer(reducer, initialState);
}
