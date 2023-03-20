import style from './css/header.module.css';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import Logo from '../../Imgs/Logo_Shop1974.png'
function Header () {
    return (
        <header className={clsx(style.Header)}>
            <div className={clsx(style.HeaderLeft)}>
                <ul className={clsx(style.MenuListLeft)}>
                    <li className={clsx(style.MenuItemLeft)}>
                        <Link to='/' className={clsx(style.LogoShop,style.link)}>
                            <img src={Logo} alt="" width='60px' height='60px'/>
                        </Link>
                    </li>
                    <li className={clsx(style.MenuItemLeft)}>
                        <Link to='/' className={clsx(style.LinkHome,style.link)}>Home</Link>
                    </li>
                    <li className={clsx(style.MenuItemLeft)}>
                        <Link to='/Shop' className={clsx(style.linkShop,style.link)}>Shop</Link>
                    </li>
                </ul>
            </div>
            <div className={clsx(style.HeaderBetween)}>
                <form method='POST' className={clsx(style.FormSearch)}>
                    <input type="search" name="" value="" placeholder='Search . . .' onChange={(e)=>{}}/>
                    <button type="submit" className={clsx(style.BtnSearch)}>
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>
            <div className={clsx(style.HeaderRight)}>
                <ul className={clsx(style.MenuListRight)}>
                    <li className={clsx(style.MenuItemRight)}>
                        <Link to='/Notification' className={clsx(style.linkNotification,style.link)}>
                            <i className="bi bi-bell"></i>
                        </Link>
                    </li>
                    <li className={clsx(style.MenuItemRight)}>
                        <Link to='/Cart' className={clsx(style.linkCart,style.link)}>
                            <i className="bi bi-cart"></i>
                        </Link>
                    </li>
                    <li className={clsx(style.MenuItemRight)}>
                        <button type="botton" className={clsx(style.BtnAccount)}>
                            <Link to='/Account' className={clsx(style.linkAccount,style.link)}>Login</Link>
                        </button>
                    </li>
                    <li className={clsx(style.MenuItemRight)}>
                        <Link to='/Setting' className={clsx(style.linkSetting,style.link)}>
                            <i className="bi bi-gear"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header ;