import clsx from "clsx";
import style from './css/content.module.css';
function Content ({children}) {
    return (
        <div className={clsx(style.Content)}>
            {children}
        </div>
    )
}
export default Content ;