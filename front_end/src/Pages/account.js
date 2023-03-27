import style from './css/account.module.css'
import clsx from 'clsx'
import {Login, Register} from '../Components/Layout';
function Account () {
    return (
        <div className={clsx(style.Account)}>
            <div className={clsx(style.AccountLeft)}>
                <Login/>
            </div>
            <div className={clsx(style.AccountRight)}>
                <Register/>
            </div>
        </div>
    )
}
export default Account;