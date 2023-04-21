import { 
    ADD_NEW_DATA_ACCOUNT,
    ADD_USER, 
    SET_PASSWORD_LOGIN, 
    SET_PASSWORD_REGISTER, 
    SET_PHONE_LOGIN, 
    SET_PHONE_REGISTER,
    SET_ROLENAME,
} from "./action"

const addNewDataAccount =(value) => {
    return{
        type:ADD_NEW_DATA_ACCOUNT,
        value
    }
}
const addUser = (value) => {
    return{
        type:ADD_USER,
        value
    }
}
const setPhoneLogin = (value) => {
    return{
        type:SET_PHONE_LOGIN,
        value
    }
}
const setPasswordLogin = (value) => {
    return{
        type:SET_PASSWORD_LOGIN,
        value
    }
}
const setPhoneRegister = (value) => {
    return{
        type:SET_PHONE_REGISTER,
        value
    }
}
const setPasswordRegister = (value) => {
    return{
        type:SET_PASSWORD_REGISTER,
        value
    }
}
const setRoleName = (value) => {
    return{
        type:SET_ROLENAME,
        value
    }
}
export {
    addUser,
    setPhoneLogin,
    setPasswordLogin,
    setPhoneRegister,
    setPasswordRegister,
    setRoleName,
    addNewDataAccount,
}