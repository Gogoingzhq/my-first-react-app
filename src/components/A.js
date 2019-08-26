import React, { Component } from 'react'
import HOCHeader from './header.js'
import '../styles/A.css'

class A extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='A-containar'>
                {this.props.txt}A
            </div>
        )
    }
}

export default HOCHeader(A)
