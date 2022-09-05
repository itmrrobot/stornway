import styles from './Projects.module.scss'
import classNames from 'classnames/bind';
import projectImg from '~/assets/images/projects-img/projects.avif';
import rectangleA from '~/assets/images/projects-img/rectangle-a.avif';
import rectangleB from '~/assets/images/projects-img/rectangle-b.avif';
import rectangleC from '~/assets/images/projects-img/rectangle-c.avif';
import rectangleD from '~/assets/images/projects-img/rectangle-d.avif';
import rectangleE from '~/assets/images/projects-img/rectangle-e.avif';
import rectangleF from '~/assets/images/projects-img/rectangle-f.avif';

const cx = classNames.bind(styles);

function Projects() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <img src={projectImg} alt="project-img" className={cx('img-common')} />
                <h3 className={cx('title-common')}>PROJECTS</h3>
            </div>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <h3>
                        <span className={cx('title')}>Huawei HQ, Frankfurt, 2017</span>
                    </h3>
                    <p className={cx('para')}>
                        Huawei approached us and made it very clear from the start that their new European headquarters
                        had to be both stylish and unconventional, while still keeping true to their Asian heritage.
                        Together with the client’s in-house consultants and our resident architects we were able to
                        complete this project within the estimated time frame.
                    </p>
                </div>
                <div className={cx('images')}>
                    <img src={rectangleA} alt="" className={cx('rectangle-sm')} />
                    <img src={rectangleB} alt="" className={cx('rectangle-bg')} />
                </div>
                <div className={cx('info')}>
                    <h3>
                        <span className={cx('title')}>Rhein-Main Conference Centre, Wiesbaden, 2019</span>
                    </h3>
                    <p className={cx('para','para-pv')}>
                    The city of Wiesbaden commissioned us to revamp a piece of commercially available but awkwardly shaped land in downtown Wiesbaden to a new conference center. The main requirement for the space was to be modern but flexible so that it could cater to as many different fields as possible. 
                    </p>
                </div>
                <div className={cx('images')}>
                    <img src={rectangleC} alt="" className={cx('rectangle-sm')} />
                    <img src={rectangleD} alt="" className={cx('rectangle-bg')} />
                </div>
                <div className={cx('info')}>
                    <h3>
                        <span className={cx('title')}>Danske Bank Offices, Hamburg, 2020</span>
                    </h3>
                    <p className={cx('para')}>
                    Our most recent project for Danske Bank was finished months in advance. The bank wanted to establish their German presence in a nonchalant way, while injecting a fresh air of Scandinavian design and color to the surrounding environment. One of the top features of this project remains the intricate main reception hall, with its glass ceiling. 
                    </p>
                </div>
                <div className={cx('images')}>
                    <img src={rectangleE} alt="" className={cx('rectangle-sm')} />
                    <img src={rectangleF} alt="" className={cx('rectangle-bg')} />
                </div>
            </div>
        </div>
    );
}

export default Projects;