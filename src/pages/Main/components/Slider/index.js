import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import Button from '~/components/Button';
import { Images } from '~/assets/images';

const cx = classNames.bind(styles);

function Slider() {
    const imgsRef = useRef([]);

    useEffect(() => {
        const sliderElement = document.querySelector('#slider');
        const imagesArray = sliderElement.querySelectorAll('img');
        imgsRef.current = Array.from(imagesArray);

        let currentImageIndex = 0;

        function nextImage() {
            imgsRef.current[currentImageIndex].style.opacity = 0;
            currentImageIndex = (currentImageIndex + 1) % imgsRef.current.length;
            imgsRef.current[currentImageIndex].style.opacity = 1;
        }

        const imgInterval = setInterval(nextImage, 4000);

        return () => clearInterval(imgInterval);
    }, []);

    return (
        <div id="slider" className={cx('slider')}>
            <img className={cx('slider-img')} src={Images.slider1} alt="sliderImg" />
            <img className={cx('slider-img')} src={Images.slider2} alt="sliderImg" />
            <img className={cx('slider-img')} src={Images.slider3} alt="sliderImg" />

            <div className={cx('slider-content')}>
                <span>Best Prices</span>
                <h1 className={cx('slider-title')}>Incredible Prices on All Your Favorite Items</h1>
                <p>Get more for less on selected brands</p>
                <Button primary large to="/all">
                    Shop Now
                </Button>
            </div>
        </div>
    );
}

export default Slider;
