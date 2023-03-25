import clsx from 'clsx';
import { useState } from 'react';
import ContentManager from './content';
import style from './css/manageLayout.module.css';
import HeaderManager from './header';
import NavbarMain from './navbarMain';
import NavbarSub from './navbarSub';
function ManageLayout ({children}) {
    const [show, setShow] = useState(true);
    return(
        <div className={clsx(style.ManageLayout)}>
            {/* kiểm tra nếu show === true dùng className style.ManageLayoutLeftMain ngược lại dùng className style.ManageLayoutLeftSub */}
            <div className={clsx(show?style.ManageLayoutLeftMain:style.ManageLayoutLeftSub,'ManageLayoutLeft')}>
                {/* Nếu show === true trả ra function <NavbarMain/> ngược lại trả về function <NavbarSub/> */}
                {show?<NavbarMain show={show} setShow={setShow}/>:<NavbarSub show={show} setShow={setShow}/>}
            </div>
            {/* kiểm tra nếu show === true dùng className style.ManageLayoutRightMain ngược lại dùng className style.ManageLayoutRightSub */}
            <div className={clsx(show?style.ManageLayoutRightMain:style.ManageLayoutRightSub,'ManageLayoutRight')}>
                <HeaderManager show={show}/>
                <ContentManager children={children}/>
            </div>
        </div>
    )
}
export default ManageLayout; 