import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import { addCart } from '~/redux/cartSlice';
import styles from './ProductDetail.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [quantt, setQuantt] = useState(1);
    const location = useLocation();
    const { productDetail } = location.state;

    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.carts);

    function handleAddCart() {
        let cartNew = {
            name: productDetail.name,
            price: productDetail.prices,
            image: productDetail.photo,
            quantity: quantt,
        };
        const newCarts = [...carts];
        const index = newCarts.findIndex((cart) => cart.name === cartNew.name);
        if (index >= 0) {
            newCarts.splice(index, 1, { ...cartNew, quantity: newCarts[index].quantity + quantt });
        } else {
            newCarts.push(cartNew);
        }
        dispatch(addCart(newCarts));
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-desc')}>
                <img src={productDetail.photo} alt="detail product images" />
                <p className={cx('desc')}>
                    I'm a product description. This is a great place to "sell" your product and grab buyers' attention.
                    Describe your product clearly and concisely. Use unique keywords. Write your own description instead
                    of using manufacturers' copy.
                </p>
            </div>
            <div className={cx('content')}>
                <h2 className={cx('name')}>{productDetail.name}</h2>
                <p className={cx('price')}>{productDetail.prices}</p>
                <span className={cx('quantity-title')}>
                    Quantity
                    <span className={cx('like')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                </span>
                <input
                    className={cx('quantity')}
                    type="number"
                    value={quantt}
                    onChange={(e) => setQuantt(Number.parseInt(e.target.value))}
                />
                <button className={cx('add-cart-btn')} onClick={handleAddCart}>
                    Add to Cart
                </button>
                <button className={cx('buy-btn')}>Buy Now</button>
                <p className={cx('infor')}>Product infor</p>
                <p className={cx('infor')}>Return & Refund Policy</p>
                <p className={cx('infor')}>Shipping infor</p>
            </div>
        </div>
    );
}

export default ProductDetail;
