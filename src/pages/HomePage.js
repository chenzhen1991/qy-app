import React from 'react';
import Page from '../component/Page';
import Title from '../component/Title';
import Business from '../component/Business';
import '../static/css/common.less';

const HomePageBanner = require('../static/images/home_banner.png');

export default function HomePage() {
    return (
        <div>
            <Page>
                <img className='banner' src={HomePageBanner} alt="钱源二类电商投放2.0 让产品销售省心无忧"/>
                <Title title='业务简介' msg='BUSINESS BRIEF'/>
                <Business />
            </Page>
        </div>
    )
}
