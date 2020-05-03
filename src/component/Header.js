import React, { Component } from 'react';
import '../static/css/header.less';
import { NavLink } from 'react-router-dom';
const logo = require('../static/images/logo.png');

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isActived: false
        }
    }

    render() {
        const {isShow} = this.state;
        return (
            <div>
                <div className='header-blank'></div>
                <header>
                    <div className='logo'><img src={logo} alt=""/></div>
                    <div className='nav'>
                        <div className='nav-icon' onClick={() => this.triggerMenu()}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        {isShow ? <div className='nav-menu'>
                            <NavLink className='item' exact activeClassName='active' activeStyle={{
                                color: 'rgb(0,103,168)',
                                backgroundColor: 'white'
                            }} to='/'>首页</NavLink>
                            <NavLink className='item' activeClassName='active' activeStyle={{color: 'rgb(0,103,168)',
                                backgroundColor: 'white'}} to='/aboutUs'>关于我们</NavLink>
                            <NavLink className='item' activeClassName='active' activeStyle={{color: 'rgb(0,103,168)',
                                backgroundColor: 'white'}} to='/business'>业务模块</NavLink>
                            <NavLink className='item' activeClassName='active' activeStyle={{color: 'rgb(0,103,168)',
                                backgroundColor: 'white'}} to='/partner'>成功案例</NavLink>
                            <NavLink className='item' activeClassName='active' activeStyle={{color: 'rgb(0,103,168)',
                                backgroundColor: 'white'}} to='/team'>团队文化</NavLink>
                            <NavLink className='item' activeClassName='active' activeStyle={{color: 'rgb(0,103,168)',
                                backgroundColor: 'white'}} to='/contact'>联系我们</NavLink>
                        </div> : null }
                    </div>
                </header>
            </div>
    )
    }


    triggerMenu() {
        console.log(window.location)
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

