import React from 'react'
import Page from "../component/Page";
import Title from "../component/Title";
import '../static/css/team.less'
const HomePageBanner = require('../static/images/team_banner.png');
const picArray = [require('../static/images/icon_team_des_001.png'),require('../static/images/icon_team_des_002.png'),require('../static/images/icon_team_des_003.png'),require('../static/images/icon_team_des_004.png'),]
export default function Team() {
    return (
        <div>
            <Page>
                <img className='banner' src={HomePageBanner} alt="钱源二类电商投放2.0 让产品销售省心无忧"/>
                <Title title='钱源文化' msg='Qian Yuan Culture'/>
                <div className='example-content'>
                    <div><img src={picArray[0]} alt=""/></div>
                    <div>
                        <div>
                            <h3>团结</h3><p>Solidarity</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>高效</h3>
                        </div>
                    </div>
                    <div>
                        <img src={picArray[1]} alt=""/>

                    </div>
                    <div><img src={picArray[2]} alt=""/></div>
                    <div>
                        <div>
                            <h3>专注</h3><p>Absorbed</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>专业</h3><p>Speciality</p>
                        </div>
                    </div>
                    <div>
                        <img src={picArray[3]} alt=""/>

                    </div>
                </div>
                <div className='company-think'>
                    <div>
                        <button>企业愿景</button>
                        <p>创造价值、成就你我，实现全国独一家梦想！</p>
                    </div>
                    <div>
                        <button>企业理念</button>
                        <p>携手同行，让家变更好！</p>
                    </div>
                    <div>
                        <button>企业精神</button>
                        <p>永远年轻，永远热泪盈眶！</p>
                    </div>
                    <div>
                        <button>企业价值</button>
                        <p>
                            我们真诚地服务每一个客户，负责任地做好每一
                            个产品，高效地执行每一个任务，团队协作并尊
                            重每一个员工!
                        </p>
                    </div>
                </div>
            </Page>
        </div>
    )
}
