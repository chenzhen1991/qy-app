import React from 'react';
import Page from '../component/Page';
import Title from '../component/Title';
import '../static/css/common.less';
import '../static/css/aboutUsPage.less';

const HomePageBanner = require('../static/images/us_banner.png');
const AboutPic1 = require('../static/images/about_pic_des_001.png');
const AboutPic2 = require('../static/images/about_pic_des_002.png');
const AboutPic3 = require('../static/images/about_pic_des_003.png');
const AboutMoney = require('../static/images/002about_money.png');
const AboutWolf = require('../static/images/002about_wolf.png')

export default function HomePage() {
    return (
        <div>
            <Page>
                <img className='banner' src={HomePageBanner} alt="服务至上 协力同行"/>
                <div className="about-us-img">
                    <Title title='关于我们' msg='ABOUT US'/>
                    <div className='img'>
                           <img src={AboutPic1} alt=""/>
                           <div className='right'>
                               <img src={AboutPic2} alt=""/>
                               <img src={AboutPic3} alt=""/>
                           </div>
                    </div>
                    <p>钱源传媒成立于2018年3月，目前公司员工100+人，下设运营部、商务部、创意部、媒介部、人力资源部、财务部、视频部，是一家以技术为驱动，以专业团队为支撑，以效果为保障，为广告主提供优质高效的绿色营销企业。公司拥有一支专业的数字化整合营销服务团队，拥有移动互联网领域最优质的广告平台资源（今日头条、快手、抖音等移动互联网广告平台资源），已成为国内知名的广告服务商。组建了一支经验丰富的优化团队，24小时为客户的效果类广告投放进行监控、优化等精准化服务，为各类客户解决多种推广诉求。</p>
                    <img src={AboutMoney} alt=""/>
                    <p>公司专注于电商运营服务，在门户网站大数据整合，定向营销，精准流量订单转化，品牌传播方面有着独到的操作方案和思路！通过客户的需求定位以及用户网络行为数据的深入研究与分析，采用系统化的策划与全面的运营体系，精准覆盖到目标用户。通过对各产品的整合、优化来实现互联网媒体流量最大价值，进而提升客户的投资回报率。</p>
                </div>
                <div className={"wolf-culture"}>
                    <Title title='狼性文化' msg='Wolf culture' fontColor='white' />
                    <img src={AboutWolf} alt=""/>
                    <p>公司倡导狼性文化。创建最具竞争力的企业是钱源人共同的目标。在实现这一目标进程中，每一个人都要忠诚自己的团队，勇挑重担，发挥潜能，用心做事，在团队中争做“领头雁”；要彼此信任，默契配合，甘于奉献，众志成城，在激烈的市场竞争中搏风击浪，攻坚克难，最终在实现企业发展战略目标的同时实现自己的人生价值。</p>
                    <p>有才有能敢展现，有品有德敢担当,只要愿意并能够为企业努力工作、积极奉献，就是钱源需要的人才。在选用人才上，钱源首先考虑的是人员知识技能和岗位需要，使两者达到最佳组合，最大限度地发挥每个职工的专长和能力。</p>
                </div>
                <div className='achievement'>
                    <Title title='成就及荣誉' msg='ACHIEVEMENTS AND HONORS'/>
                    <div className='img'>
                        <div>2019年度荣获优秀鲁班精神奖</div>
                    </div>
                </div>
            </Page>
        </div>
    )
}

