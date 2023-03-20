import clsx from "clsx";
import style from './css/defaultLayout.module.css'
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

function DefaultLayout ({children}) {
    return (
        <div className={clsx(style.DefaultLayout)}>
            <Header/>
            <Content children={children}/>
            <Footer/>
        </div>
    )
}
export default DefaultLayout;