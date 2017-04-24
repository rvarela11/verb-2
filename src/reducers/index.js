// const initialState = {
//   number: 0
// };

export function reducer (state = 0, action) {
  switch (action.type) {
    case 'PLUS':
        return state + 1;
    case 'MINUS':
        return state - 1;
    default:
        return state;
  }
}
