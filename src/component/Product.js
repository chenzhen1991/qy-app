import React from 'react';
import Title from './Title';
import '../static/css/product.less'

export default function Product() {
    return (
        <div className='product'>
            <Title title='产品及服务' msg='PRODUCTS AND SERVICES' fontColor='white'/>
            <div className='intro'>
                <div className='intro_0'>文案策划</div>
                <div className='intro_1'>产品拍摄</div>
                <div className='intro_2'>视觉设计</div>
                <div className='intro_3'>广告视频拍摄</div>
                <div className='intro_4'>信息流广告推广</div>
                <div className='intro_5'>专业运营服务</div>
                <div className='intro_6'>供应链对接</div>
                <div className='intro_7'>智能选品爆款推荐</div>
            </div>
        </div>
    )
}
