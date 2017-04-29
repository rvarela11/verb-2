import userData from '../data';

export const GETUSERS = 'GETUSERS';
export function getUsers() {
  return {
    type: GETUSERS,
    data: userData
  }
}

export const GETBUTTONTITLE = 'GETBUTTONTITLE';
export function changeButtonTitle(buttonName) {
  return {
    type: GETBUTTONTITLE,
    buttonName
  }
}
