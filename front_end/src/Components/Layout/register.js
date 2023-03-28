import clsx from "clsx";
import style from './css/register.module.css'
function Register ({showPass, setShowPass}) {
    return(
        <div className={clsx(style.Register)}>
            <div className={clsx(style.TableRegister)}>
                <h2 className={clsx(style.TitleTableRegister)}>Register</h2>
                <form className={clsx(style.FormRegister)} method='POST'>
                    <div className={clsx(style.InputBoxRegister)}>
                        <span className={clsx(style.IconRegister)}>
                            <i className="bi bi-phone-fill"></i>
                        </span>
                        <input 
                            id="InputPhoneRegister"
                            type="tel" 
                            name="" 
                            value="" 
                            pattern="[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{2}" 
                            required
                            onChange={()=>{}}
                        />
                        <label htmlFor="InputPhoneRegister">Phone</label>
                    </div>
                    <div className={clsx(style.InputBoxRegister)}>
                        <span className={clsx(style.IconRegister)}>
                            <i className="bi bi-shield-lock-fill"></i>
                        </span>
                        <input 
                            id="InputPasswordRegister"
                            type={showPass?'password':'text'} 
                            name="" 
                            value=""
                            required
                            onChange={()=>{}}
                        />
                        <label htmlFor="InputPasswordRegister">Password</label>
                        <span className={clsx(style.IconEyeRegister)} onClick={()=>{setShowPass(!showPass)}}>
                            <i className={clsx(showPass?"bi bi-eye":"bi bi-eye-slash")}></i>
                        </span>
                    </div>
                    <div className={clsx(style.BtnRegister)}>
                        <button type="submit" className={clsx(style.BtnSubmitRegister)}>Submit</button>
                        <button type="reset" className={clsx(style.BtnResetRegister)}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;