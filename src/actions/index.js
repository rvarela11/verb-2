import userData from '../data';

export const GetUsers = 'GetUsers';
export function getUsers() {
  return {
    type: GetUsers,
    data: userData
  }
}

export const GetButtonTitle = 'GetButtonTitle';
export function changeButtonTitle(buttonName) {
  return {
    type: GetButtonTitle,
    buttonName
  }
}

export const GetSingleUser = 'GetSingleUser';
export function singleUser(user) {
  return {
    type: GetSingleUser,
    user
  }
}

export const ChangeUserGroup = 'ChangeUserGroup';
export function changeUserGroup(data) {
  return {
    type: ChangeUserGroup,
    data
  }
}
