import React from 'react';
import classNames from 'classnames/bind';

import styles from './CheckIn.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

function CheckIn() {
    const customerTableHead = ['ID', 'name', 'email', 'phone', 'total orders', 'total spend', 'location'];

    const customerList = [
        {
            id: 1,
            name: 'Brittan Rois',
            email: 'brois0@unicef.org',
            location: 'Bator',
            phone: '+62 745 807 7685',
            total_spend: '$557248.44',
            total_orders: 24011,
        },
        {
            id: 2,
            name: 'Matthew Junifer',
            email: 'mjunifer1@buzzfeed.com',
            location: 'Bromma',
            phone: '+46 993 722 3008',
            total_spend: '$599864.94',
            total_orders: 60195,
        },
        {
            id: 3,
            name: 'Finlay Baylay',
            email: 'fbaylay2@purevolume.com',
            location: 'Atalaia',
            phone: '+55 232 355 3569',
            total_spend: '$171337.47',
            total_orders: 96328,
        },
        {
            id: 4,
            name: 'Beryle Monelli',
            email: 'bmonelli3@amazonaws.com',
            location: 'Martingança',
            phone: '+351 734 876 8127',
            total_spend: '$335862.78',
            total_orders: 78768,
        },
        {
            id: 5,
            name: 'Ilario Shoppee',
            email: 'ishoppee4@webmd.com',
            location: 'Lincoln',
            phone: '+54 410 442 6083',
            total_spend: '$719845.14',
            total_orders: 26045,
        },
        {
            id: 6,
            name: 'Guglielma Haking',
            email: 'ghaking5@icio.us',
            location: 'Sangzhou',
            phone: '+86 722 902 9706',
            total_spend: '$621446.73',
            total_orders: 90771,
        },
        {
            id: 7,
            name: 'Celle Acum',
            email: 'cacum6@scribd.com',
            location: 'Huzhen',
            phone: '+86 805 547 3640',
            total_spend: '$640651.30',
            total_orders: 97842,
        },
        {
            id: 8,
            name: 'Ailey Haig',
            email: 'ahaig7@live.com',
            location: 'Gizel’',
            phone: '+7 623 158 0485',
            total_spend: '$473255.45',
            total_orders: 85298,
        },
        {
            id: 9,
            name: 'Ebonee Robardet',
            email: 'erobardet8@google.co.jp',
            location: 'Uyugan',
            phone: '+63 406 595 5538',
            total_spend: '$513918.18',
            total_orders: 38959,
        },
        {
            id: 10,
            name: 'Nancy Hallatt',
            email: 'nhallatt9@tamu.edu',
            location: 'Liuhao',
            phone: '+86 194 283 7223',
            total_spend: '$862509.17',
            total_orders: 48049,
        },
        {
            id: 11,
            name: 'Savina Gardener',
            email: 'sgardenera@mozilla.com',
            location: 'Bosanski Brod',
            phone: '+387 494 626 9847',
            total_spend: '$385914.28',
            total_orders: 24961,
        },
    ];

    const renderHead = (item, idx) => {
        return <th key={idx}>{item}</th>;
    };

    const renderBody = (item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.total_orders}</td>
                <td>{item.total_spend}</td>
                <td>{item.location}</td>
            </tr>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, idx) => renderHead(item, idx)}
                bodyData={customerList}
                renderBody={(item, idx) => renderBody(item, idx)}
            />
        </div>
    );
}

export default CheckIn;
