const initialState = {
  data: [],
  singleData:[],
  passkey: 'Button',
  buttonTitle: 'All'
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GetUsers':
      return {
        ...state,
        data: state.data.concat(action.data)
      }
    case 'GetButtonTitle':
      return {
        ...state,
        buttonTitle: action.buttonName,
        passkey: 'Button'
      }
    case 'GetSingleUser':
      return {
        ...state,
        singleData: action.user,
        passkey: 'Single',
        buttonTitle: 'User'
      }
    case 'ChangeUserGroup':
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}
