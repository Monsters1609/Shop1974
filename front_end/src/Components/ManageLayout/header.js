import clsx from "clsx";
import style from './css/header.module.css';
import { Link, useLocation } from "react-router-dom";
function HeaderManager ({show}) {
    const location = useLocation()
    console.log(location.pathname)
    return(
        <div className={clsx(show?style.HeaderManagerMain:style.HeaderManagerSub)}>
            <div className={clsx(style.HeaderLeft_Path)}>
                <h4 className={clsx(style.TitlePage)}>
                    <span className={clsx(style.IconHeart)}><i className="bi bi-heart-fill"></i></span>
                    Manage{location.pathname}
                    <span className={clsx(style.IconHeart)}><i className="bi bi-heart-fill"></i></span>
                </h4>
            </div>
            <div className={clsx(style.HeaderRight)}>
                <ul className={clsx(style.HeaderList)}>
                    <li className={clsx(style.HeaderItem)}>
                        <Link to='/Notification'></Link>
                    </li>
                    <li className={clsx(style.HeaderItem)}>
                        <Link to='/Account'></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderManager; 