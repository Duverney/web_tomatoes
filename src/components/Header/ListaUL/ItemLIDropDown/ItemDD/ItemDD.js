import React, { Component } from 'react'

export default class ItemDD extends Component {
    render() {
        return (
            <a href={this.props.href}>
                {this.props.content}
            </a>
        );
    }
}