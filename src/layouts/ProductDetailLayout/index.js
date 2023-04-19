import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import NavBar from '~/layouts/components/NavBar';
import Footer from '~/layouts/components/Footer';
import styles from './ProductDetailLayout.module.scss';

const cx = classNames.bind(styles);

function ProductDetailLayout({ children }) {
    return (
        <div>
            <Header />
            <NavBar />
            <div className={cx('wrapper')}>{children}</div>
            <Footer />
        </div>
    );
}

export default ProductDetailLayout;
