import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
// import images from '~/assert/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('container-fluid', 'text-white', 'bacground-color', 'pt-5 pb-5', 'footer')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-sm-3')}>
                        <a href="#">{/* <img src={images.logo} alt=""></img> */}</a>
                    </div>
                    <div className={cx('col-sm-3')}>
                        <h3>Working hours</h3>
                        <p className={cx('mb-0')}>&emsp;Sunday - Friday</p>
                        <p className={cx('my_primary-color-opacity')}>&emsp;07:00 - 19:00</p>
                        <strong
                            className={cx('my_primary-color')}
                            style={{ fontSize: '1.3rem', fontFamily: 'Merienda' }}
                        >
                            <i>&ensp;Saturday Close </i>
                        </strong>
                    </div>
                    <div className={cx('col-sm-6', 'contact')}>
                        <h3>Contact</h3>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-4')}>
                                <FontAwesomeIcon icon={faLocation} className={cx('my_primary-color-opacity', 'icon')} />
                                <p className={cx('mb-0 my_primary-color-opacity')}>Location</p>
                                <p>NHS</p>
                            </div>
                            <div className={cx('col-sm-4')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('my_primary-color-opacity', 'icon')} />
                                <p className={cx('mb-0 my_primary-color-opacity')}>Email</p>
                                <p>anhht.23ite.@vku.udn.vn</p>
                                <p>lamnt.23ite.@vku.udn.vn</p>
                            </div>
                            <div className={cx('col-sm-4')}>
                                <FontAwesomeIcon icon={faPhone} className={cx('my_primary-color-opacity', 'icon')} />
                                <p className={cx('mb-0 my_primary-color-opacity')}>Email</p>
                                <p>+849xx xxxx xxx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
