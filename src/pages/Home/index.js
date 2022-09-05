import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import image from '~/assets/images/img.webp'
import imageItem1 from '~/assets/images/img-item1.webp'
import imageItem2 from '~/assets/images/img-item2.avif'
import imageItem3 from '~/assets/images/img-item3.avif'
import careersImg from '~/assets/images/careers.webp'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <img src={image} alt="img" className={cx('img')} />
            <div className={cx('container')}>
                <span className={cx('slogan')}>QUALITY YOU CAN TRUST</span>
                <Link to="/contacts" className={cx('btn', 'btn-ct')}>
                    Get a Quote
                </Link>
            </div>
            <div className={cx('content')}>
                <div className={cx('about')}>
                    <h3 className={cx('title')}>
                        ABOUT <br /> STORNOWAY
                    </h3>
                    <p className={cx('desc')}>
                        Stornoway is a construction company with a long-standing reputation for excellence. We
                        specialize in commercial property construction but have a small portfolio of industrial and
                        residential properties. Currently, we cater to the German market, but are looking to expand
                        internationally.
                    </p>
                    <Link to="/about" className={cx('btn', 'btn-common')}>
                        Read More
                    </Link>
                </div>
                <div className={cx('projects')}>
                    <h3 className={cx('title')}>PROJECTS</h3>
                    <div className={cx('list-projects')}>
                        <div className={cx('item-projects')}>
                            <img src={imageItem1} alt="" className={cx('img-project')} />
                            <span className={cx('project-name')}>Huawei HQ, Frankfurt</span>
                        </div>
                        <div className={cx('item-projects')}>
                            <img src={imageItem2} alt="" className={cx('img-project')} />
                            <span className={cx('project-name')}>Rhein-Main Conference Centre, Wiesbaden</span>
                        </div>
                        <div className={cx('item-projects')}>
                            <img src={imageItem3} alt="" className={cx('img-project')} />
                            <span className={cx('project-name')}>Danske Bank Offices, Hamburg</span>
                        </div>
                    </div>
                    <Link to="/projects" className={cx('btn', 'btn-pj')}>
                        See More
                    </Link>
                </div>
                <div className={cx('services')}>
                    <div className={cx('services-desc')}>
                        <h3 className={cx('title')}>SERVICES</h3>
                        <p className={cx('desc')}>
                            Stornoway specializes in commercial construction, but over the years we have undertaken a
                            number of projects in industrial and residential property construction. We are a flexible
                            team with expertise in all aspects of construction work.
                        </p>
                    </div>
                    <div className={cx('list-services')}>
                        <div className={cx('item-service')}>
                            <span className={cx('service-number')}>01</span>
                            <span className={cx('service-name')}>Commercial Construction</span>
                        </div>
                        <div className={cx('item-service')}>
                            <span className={cx('service-number')}>02</span>
                            <span className={cx('service-name')}>Industrial Construction</span>
                        </div>
                        <div className={cx('item-service')}>
                            <span className={cx('service-number')}>03</span>
                            <span className={cx('service-name')}>Residential Construction</span>
                        </div>
                    </div>
                    <Link to="/services" className={cx('btn', 'btn-common','btn-sv')}>
                            More Services
                    </Link>
                </div>
                <div className={cx('careers')}>
                    <img src={careersImg} alt="careers" className={cx('careersImg')} />
                    <div className={cx('careers-desc')}>
                        <h3 className={cx('title')}>CAREERS</h3>
                        <p className={cx('desc')}>
                            We are always looking for skilled construction professionals to join our team. If you think
                            you’d make a good fit, have a look at our open positions, or leave an unsolicited
                            application.
                        </p>
                        <Link to="/careers" className={cx('btn', 'btn-common','btn-cr')}>
                            Open Positions
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;