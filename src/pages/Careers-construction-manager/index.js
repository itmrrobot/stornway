import Form from "~/components/Form";
import styles from './CareersCM.module.scss';
import classNames from "classnames/bind";
import careersImg from '~/assets/images/careers_img.avif'

const cx = classNames.bind(styles);

function CareersCM() {
    return (
        <div className={cx('wrapper')}>
            <img src={careersImg} alt="careers" className={cx('careersImg')} />
            <div className={cx('wrap')}>
                <div className={cx('heading')}>
                    <h3 className={cx('title')}>Construction Safety Manager</h3>
                    <span className={cx('desc')}>Hamburg, Germany / FULL-TIME</span>
                </div>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <h4 className={cx('title')}>Summary</h4>
                        <p className={cx('info')}>
                            As a Construction Safety Manager, you are responsible for ensuring that both the regulatory
                            and company-specific health and safety legislation and regulations are followed both off-
                            and on-site. In this role, you will be reporting directly to the Chief Health and Safety
                            Manager, and are expected to carry out a diverse and in-depth analysis of the current health
                            and safety practices.
                        </p>
                    </div>
                    <div className={cx('item')}>
                        <h4 className={cx('title')}>Key Responsibilities</h4>
                        <p className={cx('info')}>
                            You will monitor the whole construction cycle and ensure that firstly, all of the expected
                            health and safety protocols are being followed. Secondly, you analyze the current workflows
                            and develop an in-depth understanding of the bottlenecks and potential risks associated with
                            particular protocols.
                        </p>
                    </div>
                    <div className={cx('item')}>
                        <h4 className={cx('title')}>Key Skills</h4>
                        <p className={cx('info')}>
                        Health and safety regulatory experience, preferably for 5 years or more
                            <br />
                            <br /> Excellent communication and project management skills
                            <br />
                            <br /> Full fluency in industry-specific health and safety software
                            <br />
                            <br />
                            Ability to work as part of a flexible and adaptable team 
                        </p>
                    </div>
                    <div className={cx('item')}>
                        <h4 className={cx('title')}>What We Offer</h4>
                        <p className={cx('info')}>
                            At Stornoway, you will be able to work with the latest technologies in the industry.
                            <br />
                            <br /> As standard, all of our employees are fully covered by our extensive health
                            insurance, including dental and maternity care. <br />
                            <br />
                            We also offer a full 30 days of paid annual leave, plus our annual company-wide
                            team-building weekend away. <br />
                            <br />
                            All protective gear and attractive offices in multiple locations are also available for the
                            successful candidate.
                        </p>
                    </div>
                </div>
                <div className={cx('apply')}>
                    <h4 className={cx('title')}>Apply</h4>
                    <div className={cx('fields')}>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareersCM;