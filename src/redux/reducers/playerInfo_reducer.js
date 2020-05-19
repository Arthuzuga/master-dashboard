import { SAVE_PLAYER } from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case SAVE_PLAYER:
   return action.data;
  default:
   return state;
 }
};
