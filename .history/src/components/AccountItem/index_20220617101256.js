import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
      <img className={cx('avatar')} src='' alt=''/>
      <div className={cx('info')} >
        <p className={cx('username')}></p>
        <span cla
      </div>
    </div>;
}

export default AccountItem;
