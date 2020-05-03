import React from 'react';
import Title from './Title';
import '../static/css/reason.less';

const ReasonArr = [
    {
        id: 1,
        title: '领路人',
        detail: '让客户了解二类电商市场 团队来自头条抖音 教客户玩转信息流'
    },
    {
        id: 2,
        title: '专业性',
        detail: '了解各种互联网流量玩法 帮客户在互联网站稳脚跟'
    },
    {
        id: 3,
        title: '投产比',
        detail: '团队成员近百人 丰富的信息流投放经验 和媒体更新资源 ro远高于大部分客户'
    },
    {
        id: 4,
        title: '多体系',
        detail: '广告投放涵盖抖音、火山 西瓜视频、轻颜相机 懂车帝、穿山甲、快手 等众多投放渠道'
    },
]

export default function Reason() {
    return (
        <div className='reason'>
            <Title title='为什么选择钱源？' msg='WHY CHOOSE MONEY SOURCE?' fontColor='white'/>
            <div className='reason_content'>
                {ReasonArr.map((item, index) => {
                    return(
                        <div key={index} className={['item','reason_item_'+index].join(' ')}>
                            <div className='title'>{item.title}</div>
                            <div className="line"></div>
                            <p>{item.detail}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
