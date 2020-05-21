import { SELECT_CAMPAIGN } from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case SELECT_CAMPAIGN:
   return action.data;
  default:
   return state;
 }
};
