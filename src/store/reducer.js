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

const FLAVOR_PRICES = {
  grape: 20,
  unicorn: 20,
  blackcurrent: 15,
  strawberry: 15,
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
        totalPrice: state.totalPrice + FLAVOR_PRICES[action.flavorName],
      };
    case actionTypes.REMOVE_FLAVOR:
      return {
        ...state,
        flavors: {
          ...state.flavors,
          [action.flavorName]: state.flavors[action.flavorName] - 1, // payload of action
        },
        totalPrice: state.totalPrice - FLAVOR_PRICES[action.flavorName],
      };
    default:
      return state;
  }
};

export default reducer;
