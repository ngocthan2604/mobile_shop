import classNames from 'classnames/bind';

import styles from '~/pages/stylePage.module.scss';
import Content from '~/pages/components/Content';
import { TvDb } from '~/database/ProductDB';

const cx = classNames.bind(styles);

function Tivi() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>T.V & Home Cinema</h1>
            <select className={cx('sort-by')}>
                <option>Sort by</option>
                <option>Newest</option>
                <option>Price (low to high)</option>
                <option>Price (high to low)</option>
                <option>Name A - Z</option>
                <option>Name Z - A</option>
            </select>

            <Content database={TvDb} />
        </div>
    );
}

export default Tivi;
