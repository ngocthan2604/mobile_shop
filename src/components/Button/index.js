import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    className = false,
    primary = false,
    tiny = false,
    small = false,
    medium = false,
    large = false,
    huge = false,
    to = '/',
}) {
    return (
        <Link
            to={to}
            className={cx(
                'button',
                {
                    primary,
                    tiny,
                    small,
                    medium,
                    large,
                    huge,
                },
                className,
            )}
        >
            {children}
        </Link>
    );
}
export default Button;
