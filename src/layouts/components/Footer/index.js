import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import Button from '~/components/Button';
import { Images } from '~/assets/images';
import { TriangleImage } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img className={cx('banner-img')} src={Images.help} alt="banner help" />
                <div className={cx('banner-content')}>
                    <TriangleImage color="#000" height="450" />
                    <h3>
                        Need Help? Check
                        <br /> Out Our Help Center
                    </h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <Button to="/" medium className={cx('help-btn')}>
                        Go to Help Center
                    </Button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-item')}>
                    <h2>Store Location</h2>
                    <a href="https://goo.gl/maps/cLWFXWy6CY8Tu6Du9" target="_blank" rel="noopener noreferrer">
                        Số 298 Cầu Diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Thành Phố Hà Nội.
                    </a>
                    <a href="mailto:ngocnguyenvan282k@gmail.com">ngocnguyenvan282k@gmail.com</a>
                    <a href="tel:0866931569">0866 931 569</a>
                </div>
                <div className={cx('content-item')}>
                    <h2>Shop</h2>
                    <Link to="/all">Shop All</Link>
                    <Link to="/mobile">Mobile</Link>
                    <Link to="/laptop">Computers</Link>
                    <Link to="/tablets">Tablets</Link>
                    <Link to="/audio">Audio</Link>
                    <Link to="/wearable">Wearable Tech</Link>
                </div>
                <div className={cx('content-item')}>
                    <h2>Customer Support</h2>
                    <a href="/">Contact Us</a>
                    <a href="/">Help Center</a>
                    <a href="/">About Us</a>
                    <a href="/">Carrers</a>
                </div>
            </div>
            <div className={cx('paying')}>
                <p>We accept the following paying methods</p>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_69,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
                        )`,
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png"
                        )`,
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_69,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex%403x.png"
                        )`,
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-chinaunionpay%403x.png"
                        )`,
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-jcb%403x.png"
                        )`,
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png"
                        )`,
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_69,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png"
                        )`,
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(
                            "https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_69,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"
                        )`,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Footer;
