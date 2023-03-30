import clsx from "clsx";
import {Link} from 'react-router-dom';
import style from './css/footer.module.css';
import Iframe from 'react-iframe';
import { SiZalo } from 'react-icons/si';
function Footer () {
    return (
        <footer className={clsx(style.Footer)}>
            <div className={clsx(style.FooterWeb)}>
                <div className={clsx(style.FooterWebTop)}>
                    <div className={clsx(style.MapInstruction)}>
                        <h4 className={clsx(style.TitleFooter)}>Map Instruction</h4>
                        <div className={clsx(style.IframeFooter)}>
                            <Iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7810764970745!2d105.80245651429735!3d21.001410994088733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca2bf1dcc07%3A0x784b41ea5bef7850!2zOThhIFAuTmfhu6V5IE5oxrAgS29uIFR1bSwgVGhhbmggWHXDom4gVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1679297943577!5m2!1svi!2s" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className={clsx(style.Contact)}>
                        <h4 className={clsx(style.TitleFooter)}>Contact</h4>
                        <div className={clsx(style.InforManager)}>
                            <p>Manager: Nguyễn Thị Hương</p>
                            <p>
                                Phone Number <i className="bi bi-phone"></i> : 
                                <Link to='tel:0947892522'>
                                    0947892522
                                </Link>
                            </p>
                            <p>
                                Email <i className="bi bi-envelope"></i> : 
                                <Link to='mailto:huong0212@gmail.com'>
                                    huong0212@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className={clsx(style.SocialNetwork)}>
                        <h4 className={clsx(style.TitleFooter)}>SocialNetwork</h4> 
                        <div className={clsx(style.LinkSN)}>
                            <Link className={clsx(style.LinkItemSN)} to='https://www.facebook.com/messages/t/100009771306126'>
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link className={clsx(style.LinkItemSN)} to='https://zalo.me/0947892522'>
                                <SiZalo/>
                            </Link>
                            <Link className={clsx(style.LinkItemSN)} to='mailto:huong0212@gmail.com'>
                                <i className="bi bi-google"></i>
                            </Link>
                        </div> 
                    </div> 
                </div>
                <div className={clsx(style.FooterWebBot)}>
                    
                </div>
            </div>
            <div className={clsx(style.FooterMobile)}>
                <ul className={clsx(style.MenuListFooterMobi)}>
                    <li className={clsx(style.MenuItemMobi)}>
                        <Link to='/' className={clsx(style.LinkItemMobi)}>
                            <i className="bi bi-house"></i>
                        </Link>
                    </li>
                    <li className={clsx(style.MenuItemMobi)}>
                        <Link to='/Shop' className={clsx(style.LinkItemMobi)}>
                            <i className="bi bi-shop"></i>
                        </Link>
                    </li>
                    <li className={clsx(style.MenuItemMobi)}>
                        <Link to='/Introduce' className={clsx(style.LinkItemMobi)}>
                            <i className="bi bi-person-lines-fill"></i>
                        </Link>
                    </li>
                    <li className={clsx(style.MenuItemMobi)}>
                        <Link to='/Setting' className={clsx(style.LinkItemMobi)}>
                            <i className="bi bi-gear"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer ;