const initialState = {
  messages: ["Howdy"]
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADDMESSAGE':
    return {
          messages: state.messages.concat(action.message),
        }
    case 'DELETEMESSAGE':
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(
          action.index + 1, state.messages.length
        ),
      ],
    };
    default:
        return state;
  }
}
