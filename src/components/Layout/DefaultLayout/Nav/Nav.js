import classNames from 'classnames/bind'
import styles from './Nav.module.scss';
import { useState} from 'react';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function Nav() {
    const [isClick,setIsClick] = useState(false);

    return (
        <div className={cx('wrap',{
            'active': isClick
        })}>
            <nav
                className={cx('navigator',{
                    'navigator-change': isClick
                })}
            >
                <div
                    className={cx('home-link')}
                >
                    <Link to="/" className={cx('link')}>
                        STORNOWAY
                    </Link>
                </div>
                <div
                    className={cx('menu')}
                >
                    {isClick === false ? (
                        <div
                            className={cx('icon-menu')}
                            onClick={() => {
                                setIsClick(true);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    fill="#fff"
                                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className={cx('drop-down')}>
                            <div
                                className={cx('icon-close')}
                                onClick={() => {
                                    setIsClick(false);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path
                                        fill="#fff"
                                        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>

                <div className={cx('list-link')}>
                    <Link to="/about" className={cx('item-link')}>
                        About
                    </Link>
                    <Link to="/projects" className={cx('item-link')}>
                        Projects
                    </Link>
                    <Link to="/services" className={cx('item-link')}>
                        Services
                    </Link>
                    <Link to="/careers" className={cx('item-link')}>
                        Careers
                    </Link>
                    <Link to="/contacts" className={cx('item-link')}>
                        Contacts
                    </Link>
                </div>
            </nav>
            <div className={cx('drop-down-list',{
                'show': isClick
            })}>
                <Link to="/about" className={cx('link')}>
                    About
                </Link>
                <Link to="/projects" className={cx('link')}>
                    Projects
                </Link>
                <Link to="/services" className={cx('link')}>
                    Services
                </Link>
                <Link to="/careers" className={cx('link')}>
                    Careers
                </Link>
                <Link to="/contacts" className={cx('link')}>
                    Contacts
                </Link>
            </div>
        </div>
    );
}

export default Nav;