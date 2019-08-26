import React, { Component } from 'react'
import HOCHeader from './header.js'
import '../styles/B.css';

class B extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='B-container'>
                {this.props.txt}B
            </div>
        )
    }
}

export default HOCHeader(B)
