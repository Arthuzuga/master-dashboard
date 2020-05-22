import { SELECT_SESSION } from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case SELECT_SESSION:
   return action.data;
  default:
   return state;
 }
};
