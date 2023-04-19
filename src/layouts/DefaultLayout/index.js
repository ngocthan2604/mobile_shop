import { useState } from 'react';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import NavBar from '~/layouts/components/NavBar';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [hideHeader, setHideHeader] = useState(false);

    let preScrollValue = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollValue = window.pageYOffset;
        if (currentScrollValue > preScrollValue) {
            setHideHeader(true);
        } else {
            setHideHeader(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header hide={hideHeader} />
            <NavBar hide={hideHeader} />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
