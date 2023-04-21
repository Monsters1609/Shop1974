import { request } from "../Data/API" 
const BtnSubmitRegister = (dispatch,HandleChange,addUser) =>{
    dispatch(addUser(HandleChange))
    request.post('/Account/postAccount',{
        PhoneNumber:HandleChange.phoneRegister, 
        Password:HandleChange.passwordRegister,
        RoleName:HandleChange.roleName,
    })
    .then(()=>{
        alert('Sign Up Success')
    })
}
const BtnLogin = (HandleChange, dataAccount, dispatch, dataAll, addNewDataAccount)=>{
    const userAccount = dataAccount.find((element,index)=>{
        return (
            element.PhoneNumber===HandleChange.phoneLogin
            &&
            element.Password===HandleChange.passwordLogin
        )
    })
    dispatch(addNewDataAccount(userAccount))
    if(userAccount){
        alert('access successful')
    }else{
        alert('access failed ')
    }
    // console.log(dataAll.newDataAccount);
}
export{
    BtnSubmitRegister,
    BtnLogin,
}