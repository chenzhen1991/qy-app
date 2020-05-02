import React from 'react';
import '../static/css/business.less';

const BusinessArr = [
    {
        id: 1,
        title:'信息流效果广告',
        detail:['广告信息精准触达','精准引流 高效获客','覆盖范围广 形式多样化','按营销效果付费 性价比高']
    },
    {
        id: 2,
        title:'直播带货',
        detail:['门店转型升级','线上营销裂变引流','微商电商导购直播','新零售直播导购营销工具']
    },
    {
        id: 3,
        title:'直营电商综合运营',
        detail:['引流量造爆款','选品推荐','数据分析','账户优化']
    },
    {
        id: 4,
        title:'整合营销',
        detail:['高效 精准 专业','网站整合营销','线上线下整合营销','一站式网络营销服务']
    }
]

export default function Business() {
    return (
        <ul>
            {BusinessArr.map((item,key) => {
                return (
                    <li className={'item_'+key} key={item.title}>
                        <div className="right">
                            <div className="title">{item.title}</div>
                            {item.detail.map((itemDetail, index) => {
                                return <div className={['detail', 'detail_'+index].join(' ')} key={itemDetail}>{itemDetail}</div>
                            })}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
