import { SAVE_SESSIONS } from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case SAVE_SESSIONS:
   return action.data;
  default:
   return state;
 }
};
