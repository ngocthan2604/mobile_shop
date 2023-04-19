import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Main.module.scss';
import Slider from './components/Slider';
import { Images } from '~/assets/images';
import Button from '~/components/Button';
import Sellers from './components/Sellers';
import { CategoriesDb, BestSellDb, SaleDb } from '~/database';
import { ShipIcon, ClockIcon, PricesIcon, BikeIcon, TriangleImage } from '~/components/Icons';

const cx = classNames.bind(styles);

function Main() {
    return (
        <div className={cx('wrapper')}>
            <Slider />

            {/* banner */}
            <div className={cx('banner')}>
                <div className={cx('banner-item')}>
                    <img src={Images.banner1} alt="banner-img" />
                    <div className={cx('banner-content')}>
                        <p>Holiday Deals</p>
                        <h1>
                            Up to <br /> 30% off
                        </h1>
                        <p>Selected Smartphone Brands</p>
                        <Button to="mobile" className={cx('mobile-btn')} tiny>
                            Shop
                        </Button>
                    </div>
                </div>
                <div className={cx('banner-item')}>
                    <img src={Images.banner2} alt="banner-img" />
                    <div className={cx('banner-content')}>
                        <p>Just In</p>
                        <h1>Take Your Sound Anywhere</h1>
                        <p>Top Headphone Brands</p>
                        <Button to="audio" className={cx('headphone-btn')} tiny>
                            Shop
                        </Button>
                    </div>
                </div>
            </div>

            {/* avantage*/}
            <div className={cx('advantage')}>
                <div className={cx('advantage-item')}>
                    <BikeIcon />
                    <h4>
                        Curb-side <br /> pickup
                    </h4>
                </div>
                <div className={cx('advantage-item')}>
                    <ShipIcon />
                    <h4>
                        Free shipping on <br /> orders over $50
                    </h4>
                </div>
                <div className={cx('advantage-item')}>
                    <PricesIcon />
                    <h4>
                        Low prices <br /> guaranteed
                    </h4>
                </div>
                <div className={cx('advantage-item')}>
                    <ClockIcon />
                    <h4>
                        Available to <br /> you 24/7
                    </h4>
                </div>
            </div>

            {/*Best Sellers */}
            <Sellers title="Best Sellers" database={BestSellDb} />

            {/* Category */}
            <div className={cx('category')}>
                <h3 className={cx('category-title')}>Shop by Category</h3>
                <div className={cx('category-list')}>
                    {CategoriesDb.map((item, index) => {
                        return (
                            <Link to={item.to} key={index} className={cx('category-item')}>
                                <div className={cx('category-img')}>
                                    {item.image ? <img src={item.image} alt="category images" /> : item.Icon}
                                </div>
                                <span className={cx('category-name')}>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Banner best price */}
            <div className={cx('best-price')} style={{ backgroundImage: `url(${Images.bestprice})` }}>
                <div className={cx('best-price-content')}>
                    <div className={cx('best-price-slogan')}>
                        Best
                        <br /> Price
                    </div>
                    <TriangleImage color="#fff" height="600" />
                    <p>Save up to</p>
                    <h2>$150</h2>
                    <p>on selected laptop & tablets brands</p>
                    <span>Terms and conditions apply</span>
                    <Button to="/sale" small className={cx('best-price-btn')}>
                        Shop
                    </Button>
                </div>
            </div>

            {/*On Sale */}
            <Sellers title="On Sale " database={SaleDb} />

            {/* Banner Today Special */}
            <div className={cx('today-special')} style={{ backgroundImage: `url(${Images.todayspecial})` }}>
                <div className={cx('today-special-content')}>
                    <div className={cx('today-special-slogan')}>Today's Special</div>
                    <TriangleImage color="#fff" height="600" />
                    <p>Best Arial View in Town</p>
                    <h2>
                        <span>30%</span> OFF
                    </h2>
                    <p>on professional camera drones</p>
                    <span>Limited quantities.</span>
                    <span>See product detail pages for availability.</span>
                    <Button to="/wearable" primary medium className={cx('today-special-btn')}>
                        Shop
                    </Button>
                </div>
            </div>

            {/* Brand */}
            <div className={cx('brand')}>
                <h4>Brands</h4>
                <img src={Images.brand} alt="brand images" />
            </div>

            {/* FeedBack */}
            <div className={cx('feddback')}>
                <h4 className={cx('feddback-title')}>Newsletter</h4>
                <p>Sign up to receive updates on new arrivals and special offers</p>
                <form action="" className={cx('feddback-form')}>
                    <label htmlFor="email"> Email *</label>
                    <input id="email" required placeholder="Your Email Here" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default Main;
