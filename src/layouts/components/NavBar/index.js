import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function NavBar({ hide }) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <nav className={cx('navbar', { hide: hide })}>
            <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to="/all">
                Shop All
            </NavLink>
            <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to="/laptop">
                Computers
            </NavLink>
            <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to="/tablets">
                Tablets
            </NavLink>
            <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to="/audio">
                Audio
            </NavLink>
            <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to="/mobile">
                Mobile
            </NavLink>
            <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to="/tv">
                T.V&Home Cinema
            </NavLink>
            <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to="/wearable">
                WearableTech
            </NavLink>
        </nav>
    );
}

export default NavBar;
