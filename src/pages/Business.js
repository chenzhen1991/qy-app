import React from 'react';
import Page from '../component/Page';
import Title from '../component/Title';
import Business from '../component/Business';
import Product from '../component/Product';
import Process from '../component/Process';
import Contact from '../component/Contact';
import '../static/css/common.less';

const HomePageBanner = require('../static/images/bussiness_banner.png');

export default function HomePage() {
    return (
        <div>
            <Page>
                <img className='banner' src={HomePageBanner} alt="务实友好 互利共赢"/>
                <Title title='业务简介' msg='BUSINESS BRIEF'/>
                <Business />
                <Product />
                <Process />
                <Contact />
                <div className='contact-map'>
                    <button>地图导航</button>
                </div>
            </Page>
        </div>
    )
}
