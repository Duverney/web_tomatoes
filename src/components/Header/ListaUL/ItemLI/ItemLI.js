import React, { Component } from 'react'

export default class ItemLI extends Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>
                    {this.props.content}
                </a>
            </li>
        );
    }
}