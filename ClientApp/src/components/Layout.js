import React, { Component } from 'react';
import Header from './Header';
import Features from './Features';
import './materialtheme.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className="layout-style">
        <Header/>
        <Features/>
      </div>
    );
  }
}
