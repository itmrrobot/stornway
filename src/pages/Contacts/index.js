
import styles from './Contacts.module.scss';
import classNames from 'classnames/bind';
import contactImg from '~/assets/images/contacts-img.avif'
import Map from '~/components/Map';

const cx = classNames.bind(styles);

function Contacts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <img src={contactImg} alt="contact-img" className={cx('img-common')} />
                <h3 className={cx('title-common')}>CONTACTS</h3>
            </div>
            <div className={cx('content')}>
                <h3 className={cx('heading')}>We would love to hear from you!</h3>
                <div className={cx('')}>
                    <div className={cx('map')}>
                        <Map />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('address')}>
                            <h3 className={cx('title')}>Visit us:</h3>
                            <span>Muller Strasse 34, 74133 Hamburg, Germany</span>
                        </div>
                        <div className={cx('contact-info')}>
                            <h3 className={cx('title')}>Get in touch:</h3>
                            <span className={cx('contact')}>
                                Call us: +18187882178 <br/> Write to us: info@stornoway.com <br/> Career inquiries:
                                careers@stornoway.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;