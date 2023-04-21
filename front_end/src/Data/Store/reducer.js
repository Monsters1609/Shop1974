import { 
    ADD_USER,
    SET_PASSWORD_LOGIN, 
    SET_PHONE_LOGIN, 
    SET_PASSWORD_REGISTER, 
    SET_PHONE_REGISTER, 
    SET_ROLENAME,
    ADD_NEW_DATA_ACCOUNT,
} from "./action";

const initStateDataAll = {
    user:[],
    newDataAccount:[],
}
const initStateHandleChange = {
    phoneRegister:'',
    passwordRegister:'',
    phoneLogin:'',
    passwordLogin:'',
    roleName:'',
}
const reducerDataAll = (state,action) => {
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                user:[action.value,...state.user]
            }
        case ADD_NEW_DATA_ACCOUNT:
            return{
                ...state,
                newDataAccount:[action.value]
            }
        default:
            throw new Error('invailid')
    }
}
const reducerHandleChange = (state,action) => {
    switch (action.type) {
        case SET_PHONE_REGISTER:
            return{
                ...state,
                phoneRegister:action.value
            }
        case SET_PASSWORD_REGISTER:
            return{
                ...state,
                passwordRegister:action.value
            }
        case SET_PHONE_LOGIN:
            return{
                ...state,
                phoneLogin:action.value
            }
        case SET_PASSWORD_LOGIN:
            return{
                ...state,
                passwordLogin:action.value
            }
        case SET_ROLENAME:
            return{
                ...state,
                roleName:action.value
            }
        default:
            throw new Error('invailid')
    }
}
export {
    initStateDataAll,
    reducerDataAll,
    initStateHandleChange,
    reducerHandleChange,
}