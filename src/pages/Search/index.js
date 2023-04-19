import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import ItemSearchDB from '~/database/ItemSearchDB';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Search Results</h1>
            <select className={cx('sort-by')}>
                <option>Sort by</option>
                <option>Newest</option>
                <option>Price (low to high)</option>
                <option>Price (high to low)</option>
                <option>Name A - Z</option>
                <option>Name Z - A</option>
            </select>
            <ul className={cx('product-list')}>
                {ItemSearchDB.map((item, index) => {
                    return (
                        <li className={cx('product-item')} key={index}>
                            <Link to="/productdetail" state={{ productDetail: item }}>
                                <img src={item.photo} alt="search images" />
                                <h4>{item.name}</h4>
                            </Link>
                            <p>{item.prices}</p>
                            <button>{item.btn}</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Search;
