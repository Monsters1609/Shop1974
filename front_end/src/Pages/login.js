import clsx from 'clsx';
import {Link} from 'react-router-dom'
import { addNewDataAccount, setPasswordLogin, setPhoneLogin } from '../Data/Store';
import { useContextDataAll, useContextHandleChange } from '../Hooks/hooks';
import style from './css/login.module.css';
import { BtnLogin } from '../Handles';
import { useEffect, useState } from 'react';
import { request } from '../Data/API';
function Login () {
    const [showPass, setShowPass] = useState(true)
    const [HandleChange, dispatchHandleChange] = useContextHandleChange()
    const [dataAccount, setDataAccount] = useState([])
    const [dataAll, dispatch] = useContextDataAll()
    useEffect(()=>{
        request.get('/Account/getAccount')
        .then((res)=>{
            setDataAccount(res.data)
        })
        
    },[]);
    console.log(dataAll);
    return(
        <div className={clsx(style.Login)}>
            <div className={clsx(style.TableLogin)}>
                <h2 className={clsx(style.TitleTableLogin)}>Login</h2>
                <form className={clsx(style.FormLogin)}  >
                    <div className={clsx(style.InputBoxLogin)}>
                        <span className={clsx(style.IconLogin)}>
                            <i className="bi bi-phone-fill"></i>
                        </span>
                        <input 
                            id='InputPhone'
                            type="text" 
                            name="" 
                            value={HandleChange.phoneLogin} 
                            required
                            onChange={(value)=>{
                                dispatchHandleChange(setPhoneLogin(value.target.value))
                            }}
                        />
                        <label htmlFor="InputPhone">Phone</label>
                    </div>
                    <div className={clsx(style.InputBoxLogin)}>
                        <span className={clsx(style.IconLogin)}>
                            <i className="bi bi-shield-lock-fill"></i>
                        </span>
                        <input 
                            id='InputPassword'
                            type={showPass?'password':'text'} 
                            name="" 
                            value={HandleChange.passwordLogin} 
                            required
                            onChange={(value)=>{
                                dispatchHandleChange(setPasswordLogin(value.target.value))
                            }}
                        />
                        <label htmlFor="InputPassword">Password</label>
                        <span className={clsx(style.IconEyeLogin)} onClick={()=>{setShowPass(!showPass)}}>
                            <i className={clsx(showPass?"bi bi-eye":"bi bi-eye-slash")}></i>
                        </span>
                    </div>
                    <div className={clsx(style.RememberForgot)}>
                        <label htmlFor="Remember">
                            <input type="checkbox" name="" value="" id='Remember'/>
                            Remember me
                        </label>
                        <Link to='#'>Forgot password ?</Link>
                    </div>
                    <button className={clsx(style.BtnSubmitLogin)} type="button" onClick={()=>{BtnLogin(HandleChange, dataAccount, dispatch, dataAll, addNewDataAccount)}}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;