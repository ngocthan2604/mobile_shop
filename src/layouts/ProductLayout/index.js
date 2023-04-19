import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import NavBar from '~/layouts/components/NavBar';
import styles from './ProductLayout.module.scss';
import Sidebar from '~/layouts/components/SideBar';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <NavBar />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductLayout;
