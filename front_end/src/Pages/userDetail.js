import clsx from "clsx";
import style from './css/userDetail.module.css'
import { useContextDataAll } from "../Hooks/hooks";
import { useEffect } from "react";
function UserDetail () {
    const [dataAll, dispatch] = useContextDataAll()
    useEffect(()=>{

    },[])
    return(
        <div className={clsx(style.UserDetail)}>
            <div className={clsx(style.TableUserDetail)}>
                <h2 className={clsx(style.TitleTableUserDetail)}>More User Information</h2>
                <form className={clsx(style.FormUserDetail)} >
                    <div className={clsx(style.FormUserDetailLeft)}>
                        <div className={clsx(style.InputBoxUserDetail)}>
                            <span className={clsx(style.IconRegister)}>
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input type="text" name="" value="" onChange={()=>{}}/>
                        </div>
                        <div className={clsx(style.InputBoxUserDetail)}>
                            <span className={clsx(style.IconRegister)}>
                                <i className="bi bi-calendar-fill"></i>
                            </span>
                            <input type="text" name="" value="" onChange={()=>{}}/>

                        </div>
                        <div className={clsx(style.InputBoxUserDetail)}>
                            <span className={clsx(style.IconRegister)}>
                                <i className="bi bi-gender-trans"></i>
                            </span>
                            <input type="text" name="" value="" onChange={()=>{}}/>

                        </div>
                        <div className={clsx(style.InputBoxUserDetail)}>
                            <span className={clsx(style.IconRegister)}>
                                <i className="bi bi-envelope-fill"></i>
                            </span>
                            <input type="text" name="" value="" onChange={()=>{}}/>

                        </div>
                    </div>
                    <div className={clsx(style.FormUserDetailRight)}>
                        <div className={clsx(style.InputBoxUserDetail)}>
                            <span className={clsx(style.IconRegister)}>
                                <i className="bi bi-phone-fill"></i>
                            </span>
                            <input type="text" name="" value="" onChange={()=>{}}/>

                        </div>
                        <div className={clsx(style.InputBoxUserDetail)}>
                            <span className={clsx(style.IconRegister)}>
                                <i className="bi bi-geo-alt-fill"></i>
                            </span>
                            <input type="text" name="" value="" onChange={()=>{}}/>

                        </div>
                        <div className={clsx(style.InputBoxUserDetail)}>
                            <span className={clsx(style.IconRegister)}>
                                <i className="bi bi-person-bounding-box"></i>
                            </span>
                            <input type="text" name="" value="" onChange={()=>{}}/>

                        </div>
                        <button type="submit" onClick={()=>{}}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UserDetail;