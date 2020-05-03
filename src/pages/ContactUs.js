import React from 'react';
import Page from '../component/Page';
import Title from "../component/Title";
import '../static/css/contact-us.less';
import '../static/css/common.less';
const HomePageBanner = require('../static/images/contact_banner.png');

const pic = [require('../static/images/icon_contact_002.png'),require('../static/images/icon_contact_003.png'),require('../static/images/icon_contact_004.png')]

export default function ContactUs() {
    return (
        <div>
            <Page>
                <img className='banner' src={HomePageBanner} alt="钱源二类电商投放2.0 让产品销售省心无忧"/>
                <Title title='联系我们' msg='Contact us'/>
                <div className='contact-us-info'>
                    <div>
                        <img src={pic[0]} alt=""/>
                        <h4>联系电话</h4>
                        <p>13397602966</p>
                    </div>
                    <div>
                        <img src={pic[1]} alt=""/>
                        <h4>电子邮件</h4>
                        <p>476686705@qq.com</p>
                    </div>
                    <div>
                        <img src={pic[2]} alt=""/>
                        <h4>QQ资讯</h4>
                        <p>476686705@qq.com</p>
                    </div>
                </div>
                <div className='contact-method'>
                    <p>
                        留下您的联系方式 <br/>
                        我们将第一时间与您联系！
                    </p>
                    <div>
                        <input type="text" placeholder="姓名"/>
                        <input type="text" placeholder="公司名称"/>
                        <input type="text" placeholder="手机"/>
                    </div>
                    <button>立即提交</button>
                </div>
                <div className='contact-map'>
                    <button>地图导航</button>
                </div>
            </Page>
        </div>
    )
}
