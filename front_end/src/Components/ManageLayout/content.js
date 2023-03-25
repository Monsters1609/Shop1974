import clsx from "clsx";
import style from './css/content.module.css';
function ContentManager ({children}) {
    return(
        <div className={clsx(style.ContentManager)}>
            {children}
        </div>
    )
}
export default ContentManager; 