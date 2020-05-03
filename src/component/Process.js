import React from 'react';
import Title from './Title';
import '../static/css/process.less';

export default function Process() {
    return (
        <div className='process'>
            <Title title='合作流程' msg='SUCCESS STORIES'/>
            <div className="process-content">
                <div className="item item item _0">填写申请表</div>
                <div className="line"></div>
                <div className="item item_1">详情沟通</div>
                <div className="line"></div>
                <div className="item item_2">合同签订</div>
                <div className="line"></div>
                <div className="item item_3">合作投放</div>
            </div>
        </div>
    )
}
