import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from "./constants";
const initState = {
  counter: 0,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
      break;
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
      break;
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
      break;
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
      break;
    default:
      return state;
  }
}
export default reducer;
