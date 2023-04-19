import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './CartResult.module.scss';

const cx = classNames.bind(styles);

function CartResult({ show, onClick }) {
    const classname = cx('cart-result', { show: show });

    const carts = useSelector((state) => state.cart.carts);
    console.log(carts);

    return (
        <div className={classname}>
            <div className={cx('header')}>
                <span className={cx('back-icon')} onClick={onClick}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
                Cart
            </div>
            {carts.length === 0 ? (
                <div className={cx('content')}>Cart is empty</div>
            ) : (
                <ul className={cx('cart-list')}>
                    {carts.map((cart, index) => (
                        <li className={cx('cart-item')} key={index}>
                            <img src={cart.image} alt="img" />
                            <div className={cx('desc')}>
                                <h4 className={cx('name')}>{cart.name}</h4>
                                <span className={cx('price')}>{cart.price}</span>
                            </div>
                            <span className={cx('quantity')}>x{cart.quantity}</span>
                        </li>
                    ))}
                </ul>
            )}
            <div className={cx('footer')}>
                <span className={cx('total')}>Total:</span>
                <span className={cx('total-price')}>
                    $
                    {carts.reduce((total, cart) => {
                        return total + Number.parseFloat(cart.price.slice(1)) * cart.quantity;
                    }, 0)}
                </span>
                <span className={cx('pay-btn')}>Pay Now</span>
            </div>
        </div>
    );
}

export default CartResult;
