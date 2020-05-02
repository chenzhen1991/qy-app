import React from 'react';


export default function Title(props) {
    const {title, msg} = props
    return (
        <div>
            <div className='title'>{title}</div>
            <div className="line"></div>
            <div className='msg'>{msg}</div>
        </div>
    )
}
