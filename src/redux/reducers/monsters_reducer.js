import { SAVE_MONSTERS } from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case SAVE_MONSTERS:
   return action.data;
  default:
   return state;
 }
};
