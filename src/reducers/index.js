const initialState = {
  messages: ["Howdy"]
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADDMESSAGE':
    return {
          messages: state.messages.concat(action.message),
        }
    default:
        return state;
  }
}
