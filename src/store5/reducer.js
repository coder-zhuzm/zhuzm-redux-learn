import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA,
} from "./constants.js";
const initState = {
  counter: 0,
  banners: [],
  recommends: [],
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
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
export default reducer;
