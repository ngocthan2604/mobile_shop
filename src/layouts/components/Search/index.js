import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { SearchDb } from '~/database';
import styles from './Search.module.scss';
import { SearchIcon, ClearIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showTippy, setShowTippy] = useState(false);

    function handleResultSearch() {
        setShowTippy(true);
    }

    function handleChange(e) {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }

    return (
        <Tippy
            interactive
            visible={showTippy && searchValue}
            placement="bottom-start"
            onClickOutside={() => setShowTippy(false)}
            render={(attrs) => {
                return (
                    <div className={cx('search-result')} {...attrs} tabIndex="-1">
                        <h3 className={cx('search-result-title')}>Trending Products</h3>
                        {SearchDb.map((item, index) => (
                            <Link
                                to="/productdetail"
                                state={{ productDetail: item }}
                                className={cx('search-result-item')}
                                key={index}
                                onClick={() => setShowTippy(false)}
                            >
                                <img src={item.photo} className={cx('result-item-img')} alt="search result img" />
                                <div className={cx('result-item-content')}>
                                    <h4 className={cx('result-item-title')}>{item.name}</h4>
                                    <span className={cx('result-item-desc')}>{item.desc}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                );
            }}
        >
            <div className={cx('wrapper')}>
                <input
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Search..."
                    onChange={handleChange}
                    onFocus={handleResultSearch}
                />
                {!!searchValue && (
                    <span className={cx('clear-value')} onClick={() => setSearchValue('')}>
                        <ClearIcon />
                    </span>
                )}
                <Link
                    to="/search"
                    className={cx('search-btn')}
                    onClick={() => {
                        setShowTippy(false);
                    }}
                >
                    <SearchIcon />
                </Link>
            </div>
        </Tippy>
    );
}
export default Search;
