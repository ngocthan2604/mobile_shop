import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Filter By</h2>
            <ul className={cx('category')}>
                Category
                <li className={cx('category-item', { active: true })}>All</li>
                <li className={cx('category-item')}>Sale</li>
                <li className={cx('category-item')}>Best Sellers</li>
                <li className={cx('category-item')}>Laptop</li>
                <li className={cx('category-item')}>Mobile</li>
                <li className={cx('category-item')}>Audio</li>
                <li className={cx('category-item')}>T.V & Home Ciname</li>
                <li className={cx('category-item')}>Wearable Tech</li>
            </ul>

            <div className={cx('price')}>
                Price
                <span className={cx({ active: true })}>0 - $30</span>
                <span>$30 - $45</span>
                <span>$45 - $70</span>
                <span>$70 - $85</span>
                <span>$85 - $100</span>
            </div>
        </div>
    );
}

export default Sidebar;
