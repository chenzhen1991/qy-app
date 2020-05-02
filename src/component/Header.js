import React, { Component } from 'react';
import '../static/css/header.less';
import { Link } from 'react-router-dom';
const logo = require('../static/images/logo.png');

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }

    triggerMenu() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    
    render() {
        const {isShow} = this.state
        return (
            <header>
                <div className='logo'><img src={logo} alt=""/></div>
                <div className='nav'>
                    <div className='nav-icon' onClick={() => this.triggerMenu()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {isShow ? <div class='nav-menu'>
                        <Link className='item' to='/'>首页</Link>
                        <Link className='item' to='/about'>关于我们</Link>
                        <Link className='item' to='/business'>业务模块</Link>
                        <Link className='item' to='/partner'>成功案例</Link>
                        <Link className='item' to='/team'>团队文化</Link>
                        <Link className='item' to='/contact'>联系我们</Link>
                    </div> : null }
                </div>
            </header>
        )
    }
}

