const initialState = {
  data: [],
  buttonTitle: 'All'
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GETUSERS':
      return {
        data: state.data.concat(action.data),
        buttonTitle: state.buttonTitle
      }
    case 'GETBUTTONTITLE':
      const stateCopy = { ...state, buttonTitle: action.buttonName }
      return {
        data: stateCopy.data,
        buttonTitle: stateCopy.buttonTitle
      }
    default:
      return state;
  }
}
