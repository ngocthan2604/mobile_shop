import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './Login';
import Overlay from './Overlay';
import CartResult from './CartResult';
import styles from './Header.module.scss';
import Search from '~/layouts/components/Search';
import { LoginIcon, LikeIcon, CartIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header({ hide }) {
    const [overlayView, setOverlayView] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const carts = useSelector((state) => state.cart.carts);

    // show overlay when login and cart
    function handleOverlay() {
        setOverlayView(!overlayView);
    }

    //handle view cart result
    function handleCartResult() {
        handleOverlay();
        if (overlayView) {
            setShowCart(false);
        } else {
            setShowCart(true);
        }
    }

    // handle view login form
    function handleLogin() {
        handleOverlay();
        if (overlayView) {
            setShowLogin(false);
        } else {
            setShowLogin(true);
        }
    }

    return (
        <div className={cx('header', { hide: hide })}>
            <div className={cx('header-left')}>
                <div className={cx('header-logo')}>
                    <Link to="/">Opinion</Link>
                </div>
                <Search />
            </div>
            <div className={cx('header-right')}>
                <div className={cx('header-control')} onClick={handleLogin}>
                    <LoginIcon />
                    <span className={cx('control-login')}>Log In</span>
                </div>
                <div className={cx('header-control')}>
                    <LikeIcon />
                    <span className={cx('control-like')}>Favorites</span>
                </div>
                <div className={cx('header-control')} onClick={handleCartResult}>
                    <CartIcon />
                    <span className={cx('cart-quantity')}>{carts.length}</span>
                </div>

                {/* overlay ,login form and cart element */}
                {overlayView && (
                    <Overlay
                        onClick={() => {
                            handleCartResult();
                            handleLogin();
                        }}
                    />
                )}

                <CartResult show={showCart} onClick={handleCartResult} />

                {showLogin && overlayView && <Login />}
            </div>
        </div>
    );
}

export default Header;
