import classNames from 'classnames/bind';

import { Images } from '~/assets/images';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('form-login')}>
            <img className={cx('login-img')} src={Images.login} alt="login" />
            <input className={cx('username')} placeholder="Username" />
            <input type="password" className={cx('password')} placeholder="Password" />
            <button className={cx('login-btn')}>Login</button>
            <span className={cx('forgot-pass')}>
                Forgot
                <a href="pass">Password</a>?
            </span>
            <span className={cx('singup')}>
                Don't have an account?
                <a href="singup">Sing up</a>
            </span>
        </div>
    );
}

export default Login;
