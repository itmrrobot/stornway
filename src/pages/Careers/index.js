import styles from './Careers.module.scss';
import classNames from 'classnames/bind';
import careersImg from '~/assets/images/careers_img.avif'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Careers() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <img src={careersImg} alt='careers-img' className={cx('img-common')}/>
                <h3 className={cx('title-common')}>CAREERS</h3>
            </div>
            <div className={cx('wrap')}>
                <h3 className={cx('heading')}>Open Positions</h3>
                <div className={cx('list-positions')}>
                    <div className={cx('job-position')}>
                        <h3 className={cx('number')}>01</h3>
                        <Link to='./careers-safety-coordinator' className={cx('position-link')}>Health and Safety Coordinator - Hamburg, Germany</Link>
                        <span className={cx('desc')}>FULL-TIME</span>
                    </div>
                    <div className={cx('job-position')}>
                        <h3 className={cx('number')}>02</h3>
                        <Link to='./careers-construction-manager' className={cx('position-link')}>Construction Safety Manager - Hamburg, Germany</Link>
                        <span className={cx('desc')}>FULL-TIME</span>
                    </div>
                    <div className={cx('job-position')}>
                        <h3 className={cx('number')}>03</h3>
                        <Link to='./careers-construction-engineer' className={cx('position-link')}>Construction Engineer - Hamburg, Germany</Link>
                        <span className={cx('desc')}>FULL-TIME</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;