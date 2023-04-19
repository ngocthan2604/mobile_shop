import classNames from 'classnames/bind';

import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

function Overlay({ onClick }) {
    const overlay = cx('overlay');
    return <div className={overlay} onClick={onClick}></div>;
}

export default Overlay;
