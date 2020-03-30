import { SAVE_EQUIPMENTS } from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case SAVE_EQUIPMENTS:
   return action.data;
  default:
   return state;
 }
};
