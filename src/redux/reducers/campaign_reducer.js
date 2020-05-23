import { SAVE_CAMPAIGN } from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case SAVE_CAMPAIGN:
    localStorage.setItem("campaigns", JSON.stringify(action.data))
   return action.data;
  default:
   return state;
 }
};
