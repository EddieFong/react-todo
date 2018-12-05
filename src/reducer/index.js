
const initialState = {
    // counterSum: 0,
    // counterItems: []
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "COUNTERSUM":
        return { ...state, counterSum: state.counterSum + payload }
      default:
        return state
    }
  };
  
  