import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { calendarReducer } from "./calendar/calendarReducer";
import { loginReducer } from "./login/loginReducer";
import { registrationReducer } from "./registration/registrationReducer";
import { resetCodeReducer } from "./resetCode/resetCodeReducer";
import { resetMailReducer } from "./resetMail/resetMailReducer";
import { setKeyReducer } from "./resetMail/setKeyReducer";
import { resetPasswordReducer } from "./resetPassword/resetPasswordReducer";

const rootReducer = combineReducers({
  setKey: setKeyReducer,
  login: loginReducer,
  resetMail: resetMailReducer,
  resetCode: resetCodeReducer,
  resetPassword: resetPasswordReducer,
  registration: registrationReducer,
  calendar: calendarReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
