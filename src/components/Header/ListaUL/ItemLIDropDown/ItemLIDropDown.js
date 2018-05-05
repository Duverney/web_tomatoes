import React, { Component } from 'react'

import ItemDD from './ItemDD/ItemDD'

export default class ItemLIDropDown extends Component {
    render() {
        return (
            <li className='dropdown'>
                <a href={this.props.href} className='dropbtn'> {this.props.content} </a>
                <div className='dropdown-content'>
                    <ItemDD href='#1' content='DD 1' />
                    <ItemDD href='#2' content='DD 2' />
                    <ItemDD href='#3' content='DD 3' />
                </div>
            </li>
        );
    }
}