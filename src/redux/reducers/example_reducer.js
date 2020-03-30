import DATA_EXAMPLE from "../actions/actionsType";

export default (state = {}, action) => {
 switch (action.type) {
  case DATA_EXAMPLE:
   return action.data;
  default:
   return state;
 }
};
