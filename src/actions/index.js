export const ADDMESSAGE = 'ADDMESSAGE';
export function addMessage (message) {
  return {
    type: ADDMESSAGE,
    message: message
  }
}
