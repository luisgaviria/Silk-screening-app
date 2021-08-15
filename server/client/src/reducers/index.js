import { combineReducers } from "redux";
// import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
// import surveysReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  category: categoryReducer,
  // form: reduxForm,
  // surveys: surveysReducer,
});
