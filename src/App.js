import React, { Component } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Section from './components/Section/Section'

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='main-header'>
            <Header />
          </div>
          <div className='main-section'>
            <Section />
          </div>
        </div>
      </div>
    );
  }
}