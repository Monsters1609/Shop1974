import clsx from 'clsx';
import style from './css/home.module.css'
import { Slider } from '../Components/Layout';
function Home () {
    return (
        <div className={clsx(style.Home)}>
            <Slider/>
        </div>
    )
}
export default Home;