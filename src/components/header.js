import React, { Component } from 'react'
import '../styles/header.css';
//高阶组件 highOrderComponent

function HOCHeader(WrappedComponent) {
    return class Header extends Component {

        constructor(props) {
            super(props)
            this.state = {
                txt: '我是组件'
            }
        }

        render() {
            return (
                <div className='header-container'>
                    <header className='header'>我是头部</header>
                    <WrappedComponent txt={this.state.txt} />
                </div>
            )
        }
    }
}

export default HOCHeader;





