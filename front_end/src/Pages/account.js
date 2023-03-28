import style from './css/account.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import {Login, Register} from '../Components/Layout';
function Account () {
    const [showPass, setShowPass] = useState(true)
    return (
        <div className={clsx(style.Account)}>
            <div className={clsx(style.AccountLeft)}>
                <Login showPass={showPass} setShowPass={setShowPass}/>
            </div>
            <div className={clsx(style.AccountRight)}>
                <Register showPass={showPass} setShowPass={setShowPass}/>
            </div>
        </div>
    )
}
export default Account;