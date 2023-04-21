import clsx from "clsx";
import { Link } from "react-router-dom";
import style from './css/navbarMain.module.css';
import Logo from '../../Imgs/Logo_Shop1974.png'
function NavbarMain ({show, setShow}) {
    return(
        <div className={clsx(style.NavbarMain)}>
            <table className={clsx(style.TableNavMain)}>
                <thead className={clsx(style.TheadNavMain)}>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/'>
                                <img src={Logo} alt="" width='60px' height='60px'/>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <div className={clsx(style.CloseMenuList,'CloseMenuList')} onClick={()=>{setShow(!show)}}>
                                <i className={clsx(style.IconCloseMenu,"bi bi-list")}></i>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody className={clsx(style.TbodyNavMain)}>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/Shop' className={clsx(style.LinkItem)}>
                                <i className="bi bi-shop"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/Register' className={clsx(style.LinkItem)}>
                                <i className="bi bi-person-plus-fill"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/Add' className={clsx(style.LinkItem)}>
                                <i className="bi bi-bag-plus-fill"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/Update' className={clsx(style.LinkItem)}>
                                <i className="bi bi-cart-check-fill"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/TableList' className={clsx(style.LinkItem)}>
                                <i className="bi bi-list-stars"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/DoneTableList' className={clsx(style.LinkItem)}>
                                <i className="bi bi-list-check"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/ChartStatistical' className={clsx(style.LinkItem)}>
                                <i className="bi bi-bar-chart-line"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className={clsx(style.TrNavMain)}>
                        <td className={clsx(style.TdNavMain)}>
                            <Link to='/Setting' className={clsx(style.LinkItem)}>
                                <i className="bi bi-gear"></i>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default NavbarMain; 