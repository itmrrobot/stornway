import Form from "~/components/Form";
import styles from './CareersCE.module.scss';
import classNames from "classnames/bind";
import careersImg from '~/assets/images/careers_img.avif'

const cx = classNames.bind(styles);

function CareersCE() {
    return (
        <div className={cx('wrapper')}>
            <img src={careersImg} alt="careers" className={cx('careersImg')} />
            <div className={cx('wrap')}>
                <div className={cx('heading')}>
                    <h3 className={cx('title')}>Construction Engineer</h3>
                    <span className={cx('desc')}>Hamburg, Germany / FULL-TIME</span>
                </div>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <h4 className={cx('title')}>Summary</h4>
                        <p className={cx('info')}>
                            As a Construction Engineer, you work as part of the engineering department, ensuring that
                            our construction projects are safe and comply with the building regulations. In this role,
                            you will be reporting directly to the Chief Resident Engineer, and are expected to carry out
                            various tasks with particular emphasis on commercial construction.
                        </p>
                    </div>
                    <div className={cx('item')}>
                        <h4 className={cx('title')}>Key Responsibilities</h4>
                        <p className={cx('info')}>
                            You will monitor the whole construction cycle and ensure that firstly, the construction
                            modeling is done to the highest standards. Secondly, you identify potential risks associated
                            with particular architectural features and carry out a detailed assessment of the desired
                            design functions and their real-life implications.
                        </p>
                    </div>
                    <div className={cx('item')}>
                        <h4 className={cx('title')}>Key Skills</h4>
                        <p className={cx('info')}>
                            Commercial construction experience, preferably for 5 years or more.
                            <br />
                            <br /> Excellent communication and project management skills.
                            <br />
                            <br /> Full fluency in industry-specific engineering software.
                            <br />
                            <br />
                            Ability to work as part of a flexible and adaptable team.
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

export default CareersCE;