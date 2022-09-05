import styles from './about.module.scss'
import classNames from 'classnames/bind';
import aboutImg from '~/assets/images/about-img/about-img.avif'
import rectangle from '~/assets/images/about-img/rectangle.avif'
import olegLaptev from '~/assets/images/about-img/oleg-laptev.avif'

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <img src={aboutImg} alt="about" className={cx('img-common')} />
                <h3 className={cx('title-common')}>ABOUT</h3>
            </div>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>Stornoway services and history</h4>
                    <p className={cx('first-paragraph')}>Stornoway started as a statement against the sloppy professional standards that dominated the field of construction services 20 years ago. We wanted to set a new, high standard and work as consultants, solving our clients’ problems. </p>
                    <p className={cx('second-paragraph')}>The company quickly grew and cemented itself as the new golden standard in commercial construction. Today we continue to build on that legacy and strive for excellence at everything we do.</p>
                </div>
                <div className={cx('images')}>
                    <img src={rectangle} alt='' className={cx('rectangle')}/>
                    <img src={olegLaptev} alt='' className={cx('olegLaptev')}/>
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>Stornoway people and culture</h4>
                    <p className={cx('first-paragraph')}>Our people are what make us unique. Rather than outsourcing our construction engineers from questionable outsourcing establishments, we provide them with an environment that supports professional growth. </p>
                    <p className={cx('second-paragraph')}>At Stornoway, we are strong believers in giving our employees a voice. Our teams are put together with the help of our resident psychologist to ensure maximum productivity and engagement.</p>
                </div>
            </div>
        </div>
    );
}

export default About;