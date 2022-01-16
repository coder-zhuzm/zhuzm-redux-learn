export function addNumIncrementAction(payload: any) {
  return {
    type: "ADD",
    payload
  };
}
export function minusNumIncrementAction(payload: any) {
  return {
    type: "MINUS",
    payload
  };
}

export default (state = { num: 0 }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        num: state.num + 1
      };
    case "MINUS":
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return state;
  }
};
