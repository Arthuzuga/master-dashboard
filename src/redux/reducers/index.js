import { combineReducers } from "redux";
import example from "./example_reducer";
import monsters from "./monsters_reducer";
import equipments from "./equipments_reducer";

const rootReducer = combineReducers({
 example,
 monsters,
 equipments,
});

export default rootReducer;
