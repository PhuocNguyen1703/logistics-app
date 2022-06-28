import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import styles from './Auth.module.scss';
import logo from '~/assets/images/logo.svg';

const cx = classNames.bind(styles);

function Auth() {
    const [showPassword, setShowPassword] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    const handleChange = (e) => {
        const passwordValue = e.target.value;
        if (!!passwordValue) {
            setShowIcon(true);
        } else {
            setShowIcon(false);
        }
    };

    const handleShowPassword = () => {
        const inputEl = document.getElementById('password');

        if (inputEl.type === 'password') {
            inputEl.type = 'text';
            setShowPassword(true);
        } else {
            inputEl.type = 'password';
            setShowPassword(false);
        }
    };

    return (
        <div className={cx('auth')}>
            <div className={cx('login-form')}>
                <div className={cx('header')}>
                    <img className={cx('logo')} src={logo} alt="logo" />
                    <h1>Logistics</h1>
                </div>
                <h6>Do it your way!</h6>
                <form className={cx('form')}>
                    <h3>Welcome back</h3>

                    <div className={cx('input-username')}>
                        <input type="text" placeholder="Username" name="username" />
                    </div>

                    <div className={cx('input-password')}>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        <div className={cx('icon')} onClick={handleShowPassword}>
                            {showIcon ? (
                                showPassword ? (
                                    <FontAwesomeIcon icon={faEye} />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                )
                            ) : null}
                        </div>
                    </div>
                    <button className={cx('login-btn')}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
