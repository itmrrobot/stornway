import styles from './Services.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import servicesImg from '~/assets/images/services-img/services.avif';
import rectangleA from '~/assets/images/services-img/rectangle-a.avif';
import rectangleB from '~/assets/images/services-img/rectangle-b.avif';
import rectangleC from '~/assets/images/services-img/rectangle-c.avif';
import rectangleD from '~/assets/images/services-img/rectangle-d.avif';
import contactImg from '~/assets/images/services-img/contact_us_image.avif'

const cx = classNames.bind(styles);

function Services() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <img src={servicesImg} alt='services-img' className={cx('img-common')}/>
                <h3 className={cx('title-common')}>SERVICES</h3>
            </div>
            <div className={cx('content')}>
                <div className={cx('wrap')}>
                    <h3 className={cx('heading')}>Stornoway specializes in commercial construction work but boasts a wide portfolio covering also industrial and residential projects. </h3>
                    <div className={cx('list-services')}>
                        <div className={cx('item')}>
                            <img src={rectangleA} alt='' className={cx('rectangle')}/>
                            <div className={cx('desc')}>
                                <h3 className={cx('number')}>01</h3>
                                <h4 className={cx('heading')}>Industrial Construction</h4>
                                <p className={cx('para')}>We believe that industrial construction doesn’t have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to include or blend your industrial project into the surrounding area.</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={rectangleB} alt='' className={cx('rectangle')}/>
                            <div className={cx('desc')}>
                                <h3 className={cx('number')}>02</h3>
                                <h4 className={cx('heading')}>Residential Construction</h4>
                                <p className={cx('para')}>When it comes to our residential construction projects, we place particular emphasis on discourse with the local authorities to ensure that the development plans for the project are met and executed with care.</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={rectangleC} alt='' className={cx('rectangle')}/>
                            <div className={cx('desc')}>
                                <h3 className={cx('number')}>03</h3>
                                <h4 className={cx('heading')}>Commercial Construction</h4>
                                <p className={cx('para')}>Our clients praise our full-scale project management and complete construction capabilities as our main strengths. We will look after your commercial project from conception to plastering, electrical work, and everything else in-between.</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={rectangleD} alt='' className={cx('rectangle')}/>
                            <div className={cx('desc')}>
                                <h3 className={cx('number')}>04</h3>
                                <h4 className={cx('heading')}>Design & Architecture</h4>
                                <p className={cx('para')}>Stornoway’s residential design and architecture team makes us different from our competitors. We can look after your construction project from start to finish with no loss in communication on the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contact')}>
                    <img src={contactImg} alt='contact' className={cx('contact-img')}/>
                    <div className={cx('info')}>
                        <h3 className={cx('title')}>Contact Us</h3>
                        <span className={cx('desc')}>Get in touch with our consultants today to make your construction dream a reality.</span>
                        <Link to="/contacts" className={cx('btn','btn-ct')}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;