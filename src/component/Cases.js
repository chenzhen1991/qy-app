import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import '../static/css/case.less';

export default function Cases() {
    return (
        <div className='case'>
            <Title title='成功案例' msg='SUCCESS STORIES'/>
            <Link to='/partner' className='to-case'>点击查看更多爆款案例</Link>
        </div>
    )
}
