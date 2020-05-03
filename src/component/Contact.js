import React from 'react';
import '../static/css/contact.less';

export default function Contact() {
    return (
        <div className='contact-form'>
            <p>留下您的联系方式<br/>我们将第一时间与您联系！</p>
            <input className='contact_input' type="text" placeholder='姓名'/>
            <input className='contact_input' type="text" placeholder='公司名称'/>
            <input className='contact_input' type="text" placeholder='手机'/>
            <button>立即提交</button>
        </div>
    )
}
