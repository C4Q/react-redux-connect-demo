const initialState = {
  greetings: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GREETING':
      return Object.assign({}, state, {greetings: [...state.greetings, action.greeting]})
    default:
      return state
  }
}

export default reducer;
