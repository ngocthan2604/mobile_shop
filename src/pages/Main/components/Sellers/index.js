import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Sellers.module.scss';

const cx = classNames.bind(styles);

function Seller({ title, database }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <ul className={cx('sell-list')}>
                {database.map((item, index) => {
                    return (
                        <li className={cx('sell-item')} key={index}>
                            <Link to="/productdetail" state={{ productDetail: item }}>
                                {item.isSell && <span className={cx('item-sale')}>SALE</span>}
                                <img className={cx('img-item')} src={item.photo} alt="bestsell images" />
                                <h3 className={cx('name-item')}>{item.name}</h3>
                                <div className={cx('money')}>
                                    {item.dashprice && <span className={cx('dash-price')}>{item.dashprice}</span>}
                                    <span className={cx('price')}>{item.prices}</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Button to="/sale" primary huge className={cx('view-sell-btn')}>
                View All
            </Button>
        </div>
    );
}
export default Seller;
