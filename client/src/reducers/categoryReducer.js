import { UPDATE_CATEGORY } from "../actions/types";

export default function (state = "", action) {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return action.category;
    default:
      return state;
  }
}
