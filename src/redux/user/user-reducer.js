import UserActionTypes from '../user/user-actions-types';

const initialState= {
    currentUser:null


}

const userReducer = (state= initialState,action)=> {
    switch(action.type)
    {
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }


}

export default userReducer;