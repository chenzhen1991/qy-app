import React from 'react';
import '../static/css/title.less';

export default function Title(props) {
    const {title, msg, fontColor} = props
    return (
        <div className='content-title' style={{'color': fontColor ? fontColor : null}}>
            <div className='title'>{title}</div>
            <div className="line"></div>
            <div className='text'>{msg}</div>
        </div>
    )
}
