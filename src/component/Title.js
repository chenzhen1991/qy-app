import React from 'react';
import '../static/css/title.less';

export default function Title(props) {
    const {title, msg} = props
    return (
        <div className='content-title'>
            <div className='title'>{title}</div>
            <div className="line"></div>
            <div className='msg'>{msg}</div>
        </div>
    )
}
