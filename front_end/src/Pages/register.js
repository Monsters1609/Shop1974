import clsx from "clsx";
import {Link, useNavigate} from 'react-router-dom';
import { request } from "../Data/API";
import style from './css/register.module.css'
import { useContextDataAll, useContextHandleChange } from "../Hooks/hooks";
import { addUser, setPasswordRegister, setPhoneRegister, setRoleName} from "../Data/Store";
import { BtnSubmitRegister } from "../Handles";
import { useEffect, useState } from "react";
function Register () {
    const [dataAll, dispatch] = useContextDataAll()
    const [HandleChange, dispatchHandleChange] = useContextHandleChange();
    const [showPass, setShowPass] = useState(true)
    const navigate = useNavigate(); //đây là hook của react-router-dom : dùng để điều hướng cho các button,....
    useEffect(()=>{
        console.log(dataAll);
        request.get('/Account/getAccount')
        .then((res)=>{
            console.log(res.data);
        });
    },[]);
    return(
        <div className={clsx(style.Register)}>
            <div className={clsx(style.TableRegister)}>
                <h2 className={clsx(style.TitleTableRegister)}>Create User Account</h2>
                <form className={clsx(style.FormRegister)} >
                    <div className={clsx(style.InputBoxRegister)}>
                        <span className={clsx(style.IconRegister)}>
                            <i className="bi bi-phone"></i>
                        </span>
                        <input 
                            id="InputPhoneRegister"
                            type="text" 
                            name="" 
                            value={HandleChange.phoneRegister} 
                            required
                            onChange={(value)=>{
                                dispatchHandleChange(setPhoneRegister(value.target.value))
                            }}
                        />
                        <label className={clsx(style.LabelPhoneRegister)} htmlFor="InputPhoneRegister">Phone</label>
                    </div>
                    <div className={clsx(style.InputBoxRegister)}>
                        <span className={clsx(style.IconRegister)}>
                            <i className="bi bi-shield-lock"></i>
                        </span>
                        <input 
                            id="InputPasswordRegister"
                            type={showPass?'password':'text'} 
                            name="" 
                            value={HandleChange.passwordRegister}
                            required
                            onChange={(value)=>{
                                dispatchHandleChange(setPasswordRegister(value.target.value))
                            }}
                        />
                        <label className={clsx(style.LabelPasswordRegister)} htmlFor="InputPasswordRegister">Password</label>
                        <span className={clsx(style.IconEyeRegister)} onClick={()=>{setShowPass(!showPass)}}>
                            <i className={clsx(showPass?"bi bi-eye":"bi bi-eye-slash")}></i>
                        </span>
                    </div>
                    <div className={clsx(style.InputBoxRegister)}>
                        <span className={clsx(style.IconRegister)}>
                            <i className="bi bi-people"></i>
                        </span>
                        <select id="SelectRoleRegister" defaultValue='' onChange={(e)=>{dispatchHandleChange(setRoleName(e.target.value))}}>
                            <option value="" disabled>Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Personnel">Personnel</option>
                        </select>
                        <label htmlFor="SelectRoleRegister">Role</label>
                    </div>
                    <button type="submit" className={clsx(style.BtnSubmitRegister)} onClick={()=>{
                        BtnSubmitRegister(dispatch,HandleChange,addUser);
                        navigate('/UserDetail');
                    }}>
                        Next <i className="bi bi-arrow-right-circle"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;