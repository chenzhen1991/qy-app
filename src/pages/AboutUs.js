import React from 'react';
import Page from '../component/Page';
import Title from '../component/Title';
import '../static/css/common.less';
import '../static/css/aboutUsPage.less';

const HomePageBanner = require('../static/images/us_banner.png');
const AboutPic1 = require('../static/images/about_pic_des_001.png');
const AboutPic2 = require('../static/images/about_pic_des_002.png');
const AboutPic3 = require('../static/images/about_pic_des_003.png');

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
                    <p>钱源传媒成立于2018年3月，目前公司员工70+人，下设运营部、商务部、创意部、媒介部、人力资源部、财务部、视频部，是一家以技术为驱动，以专业团队为支撑，以效果为保障，为广告主提供优质高效的绿色营销企业。公司拥有一支专业的数字化整合营销服务团队，拥有移动互联网领域最优质的广告平台资源（今日头条、快手、抖音等移动互联网广告平台资源），已成为国内知名的广告服务商。组建了一支经验丰富的优化团队，24小时为客户的效果类广告投放进行监控、优化等精准化服务，为各类客户解决多种推广诉求。</p>
                    <p>公司专注于电商运营服务，在门户网站大数据整合，定向营销，精准流量订单转化，品牌传播方面有着独到的操作方案和思路！通过客户的需求定位以及用户网络行为数据的深入研究与分析，采用系统化的策划与全面的运营体系，精准覆盖到目标用户。通过对各产品的整合、优化来实现互联网媒体流量最大价值，进而提升客户的投资回报率。</p>
                </div>
                <div className="about-history">
                    <Title title='发展历程' msg='DEVELOPMENT HISTORY' fontColor='white' />
                    <div className='about-his-content'>
                        <div className="his-content">
                            <div className='content item_0'>
                                <div className='left'>
                                    <h4>2018年3月12日</h4>
                                    <p>公司在长沙成立</p>
                                </div>
                                <div></div>
                            </div>
                            <div className='content item_1'>
                                <div></div>
                                <div className="right">
                                    <h4>4月23日</h4>
                                    <p>员工由3人发展至10人</p>
                                </div>
                            </div>
                            <div className='content item_0'>
                                <div className='left'>
                                    <h4>2018年5月1日</h4>
                                    <p>公司搬迁至麓谷信息港C016</p>
                                </div>
                                <div></div>
                            </div>
                            <div className='content item_1'>
                                <div></div>
                                <div className="right">
                                    <h4>短短2个月不到</h4>
                                    <p>业绩上升，团队迅速扩张</p>
                                </div>
                            </div>
                            <div className='content item_0'>
                                <div className='left'>
                                    <h4>2019年1月18日</h4>
                                    <p>普瑞温泉假日酒店举行<br/>第一次年会<br/>员工人数增加至20人</p>
                                </div>
                                <div></div>
                            </div>
                            <div className='content item_1'>
                                <div></div>
                                <div className="right">
                                    <h4>2019年1月18日</h4>
                                    <p>年会同时拿下鲁班<br/>一级代理</p>
                                </div>
                            </div>
                            <div className='content item_0'>
                                <div className='left'>
                                    <h4>2019年1月26日</h4>
                                    <p>受邀参与<br/>巨量引擎海南年会</p>
                                </div>
                                <div></div>
                            </div>
                            <div className='content item_1'>
                                <div></div>
                                <div className="right">
                                    <h4>2019年3月4日</h4>
                                    <p>员工人数增加至70人<br/>公司搬迁至麓谷信息港<br/>A009+A010+C016</p>
                                </div>
                            </div>
                            <div className='content item_0'>
                                <div className='left'>
                                    <h4>2019年4月</h4>
                                    <p>业务范围迅速延伸<br/>鲁班/抖音/快手/广点通<br/>百度/AD/客服</p>
                                </div>
                                <div></div>
                            </div>
                            <div className='content item_1'>
                                <div></div>
                                <div className="right">
                                    <h4>2019年4月15日</h4>
                                    <p>单日业绩消耗突破150W</p>
                                </div>
                            </div>
                            <div className='content item_0'>
                                <div className='left'>
                                    <h4>2019年5月23日</h4>
                                    <p>单日业绩消耗突破<br/>450W</p>
                                </div>
                                <div></div>
                            </div>
                            <div className='content item_1'>
                                <div></div>
                                <div className="right">
                                    <h4>预计2020年10月</h4>
                                    <p>公司搬迁至自购写字楼</p>
                                </div>
                            </div>
                        </div>
                        <div className='line'></div>
                    </div>
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

