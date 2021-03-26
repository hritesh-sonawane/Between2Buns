import * as actionTypes from "./actions";

const initialState = {
  flavors: {
    grape: 0,
    unicorn: 0,
    blackcurrent: 0,
    strawberry: 0,
  },
  totalPrice: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FLAVOR:
      return {
        ...state,
        flavors: {
          ...state.flavors,
          [action.flavorName]: state.flavors[action.flavorName] + 1, // payload of action
        },
      };
    case actionTypes.REMOVE_FLAVOR:
      return {
        ...state,
        flavors: {
          ...state.flavors,
          [action.flavorName]: state.flavors[action.flavorName] - 1, // payload of action
        },
      };
    default:
      return state;
  }
};

export default reducer;
