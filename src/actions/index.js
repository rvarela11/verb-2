export const ADDMESSAGE = 'ADDMESSAGE';
export function addMessage (message) {
  return {
    type: ADDMESSAGE,
    message
  }
}

export const DELETEMESSAGE = 'DELETEMESSAGE';
export function deleteMessage (index) {
  return {
    type: DELETEMESSAGE,
    index
  }
}
