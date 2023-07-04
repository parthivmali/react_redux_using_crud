import { combineReducers } from "redux";
import LoginFormReducer from "./LoginFormReducer";

const RootReducer = combineReducers({
    tasks: LoginFormReducer
})

export default RootReducer;