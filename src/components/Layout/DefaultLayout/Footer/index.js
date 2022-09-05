import classNames from 'classnames/bind';
import styles from './Footer.module.scss'

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h3 className={cx('name')}>STORNOWAY</h3>
                <div className={cx('info')}>
                    <span className={cx('address')}>Muller Strasse 34, 74133 Hamburg, Germany</span>
                    <span className={cx('contact')}>+18187882178 info@stornoway.com</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;