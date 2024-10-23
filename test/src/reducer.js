


export const reducerfun = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 }; // Increment count
    case "dec":
      return { ...state, count: state.count - 1 }; // Decrement count
    default:
      return state; // Return the existing state by default
  }
};