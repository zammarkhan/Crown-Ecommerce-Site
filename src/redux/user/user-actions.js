import UserActionTypes from '../user/user-actions-types';

export const setCurrentUser = user =>({
 type : UserActionTypes.SET_CURRENT_USER,
 payload : user
})