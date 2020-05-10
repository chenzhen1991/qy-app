import React from 'react';
import Title from "../component/Title";
import Page from "../component/Page";
import '../static/css/partner.less'
const HomePageBanner = require('../static/images/client_banner.png');

export default function Partner() {
    return (
        <div>
            <Page>
                <img className='banner' src={HomePageBanner} alt=""/>
                <Title title='成功案例' msg='Success stories'/>
                <div className='pic-content'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                        <div>更多爆款案例<br/>持续更新中</div>
                    </div>
                </div>
            </Page>
        </div>
    )
}
