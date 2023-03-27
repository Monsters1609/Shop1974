import clsx from 'clsx';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import style from './css/login.module.css';
function Login () {
    const [showPass, setShowPass] = useState(true)
    return(
        <div className={clsx(style.Login)}>
            <div className={clsx(style.TableLogin)}>
                <h2 className={clsx(style.TitleTableLogin)}>Login</h2>
                <form className={clsx(style.FormLogin)} method='POST'>
                    <div className={clsx(style.InputBoxLogin)}>
                        <span className={clsx(style.IconLogin)}>
                            <i className="bi bi-phone-fill"></i>
                        </span>
                        <input 
                            id='InputPhone'
                            type="tel" 
                            name="" 
                            value="" 
                            pattern="[0-9]{2}[0-9]{4}[0-9]{4}" 
                            required
                            onChange={()=>{}}
                        />
                        <label htmlFor="InputPhone">Phone</label>
                    </div>
                    <div className={clsx(style.InputBoxLogin)}>
                        <span className={clsx(style.IconLogin)}>
                            <i className="bi bi-shield-lock-fill"></i>
                        </span>
                        <input 
                            id='InputPassword'
                            type={showPass?'text':'password'} 
                            name="" 
                            value="" 
                            required
                            onChange={()=>{}}
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
                    <button className={clsx(style.BtnSubmitLogin)} type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;