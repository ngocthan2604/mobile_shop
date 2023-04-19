import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content({ database }) {
    const [viewSp, setViewSp] = useState(9);
    const allProducts = database.slice(0, viewSp);
    function handleLoad() {
        setViewSp(viewSp + 6);
    }

    return (
        <div className={cx('products-list')}>
            {allProducts.map((item, index) => (
                <Link to="/productdetail" state={{ productDetail: item }} className={cx('product-item')} key={index}>
                    {item.isSell && <span className={cx('slogan-sale')}>SALE</span>}
                    <img src={item.photo} alt="product images" />
                    <h4>{item.name}</h4>
                    {item.dashprice && <span className={cx('dash-price')}>{item.dashprice}</span>}
                    <span className={cx('price')}>{item.prices}</span>
                </Link>
            ))}

            {viewSp < database.length && (
                <button className={cx('load-btn')} onClick={handleLoad}>
                    Load More
                </button>
            )}
        </div>
    );
}

export default Content;
