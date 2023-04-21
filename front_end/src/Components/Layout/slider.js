import clsx from "clsx";
import style from './css/slider.module.css'
function Slider () {
    return(
        <div className={clsx(style.Slider)}>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className={clsx(style.ImgSlider,'carousel-item active')} data-bs-interval="2000">
                    <img src="https://ik.imagekit.io/tvlk/blog/2022/09/quan-cafe-dep-o-ha-noi-9.jpg?tr=dpr-2,w-675" className="d-block w-100" alt="..."/>
                    </div>
                    <div className={clsx(style.ImgSlider,'carousel-item')} data-bs-interval="2000">
                    <img src="https://ik.imagekit.io/tvlk/blog/2022/09/quan-cafe-dep-o-ha-noi-15.jpg?tr=dpr-2,w-675" className="d-block w-100" alt="..."/>
                    </div>
                    <div className={clsx(style.ImgSlider,'carousel-item')} data-bs-interval="2000">
                    <img src="https://ik.imagekit.io/tvlk/blog/2022/09/quan-cafe-dep-o-ha-noi-14.jpg?tr=dpr-2,w-675" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}

export default Slider;