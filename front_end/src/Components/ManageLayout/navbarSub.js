import clsx from "clsx";
import {Link} from 'react-router-dom'
import style from './css/navbarSub.module.css';
import Logo from '../../Imgs/Logo_Shop1974.png'
function NavbarSub ({show, setShow}) {
    return(
        <div className={clsx(style.NavbarSub,'NavbarSub')}>
            <table className={clsx(style.TableNavSub)}>
                <thead className={clsx(style.TheadNavSub)}>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)}>
                            <div className={clsx(style.CloseMenuList,'CloseMenuList')} onClick={()=>{setShow(!show)}}>
                                <i className={clsx(style.IconCloseMenu,"bi bi-list")}></i>
                            </div>
                        </td>
                        <td className={clsx(style.TdNavSub)}>
                            <Link to='/' className={clsx(style.LinkHome)}>
                                <img src={Logo} alt="" width='85px' height='85px'/>
                            </Link>
                        </td>
                    </tr>
                </thead>
                <tbody className={clsx(style.TbodyNavSub)}>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)} colSpan='2'>
                            <Link className={clsx(style.LinkItem)} to='/Shop'>
                                <i className="bi bi-shop"></i> Shop
                            </Link>
                            <div className={clsx(style.Decorate)}></div>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)} colSpan='2'>
                            <Link className={clsx(style.LinkItem)} to='/Add'>
                                <i className="bi bi-bag-plus-fill"></i> Add 
                            </Link>
                            <div className={clsx(style.Decorate)}></div>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)} colSpan='2'>
                            <Link className={clsx(style.LinkItem)} to='/Update'>
                                <i className="bi bi-cart-check-fill"></i> Update
                            </Link>
                            <div className={clsx(style.Decorate)}></div>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)} colSpan='2'>
                            <Link className={clsx(style.LinkItem)} to='/TableList'>
                                <i className="bi bi-list-stars"></i> Table List
                            </Link>
                            <div className={clsx(style.Decorate)}></div>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)} colSpan='2'>
                            <Link className={clsx(style.LinkItem)} to='/doneTableList'>
                                <i className="bi bi-list-check"></i> Done Table List 
                            </Link>
                            <div className={clsx(style.Decorate)}></div>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)} colSpan='2'>
                            <Link className={clsx(style.LinkItem)} to='/ChartStatistical'>
                                <i className="bi bi-bar-chart-line"></i> Chart Statistical
                            </Link>
                            <div className={clsx(style.Decorate)}></div>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavSub)}>
                        <td className={clsx(style.TdNavSub)} colSpan='2'>
                            <Link className={clsx(style.LinkItem)} to='/Setting'>
                                <i className="bi bi-gear"></i> Setting
                            </Link>
                            <div className={clsx(style.Decorate)}></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default NavbarSub; 