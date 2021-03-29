import React, { Component } from 'react';
import Header from './Header';
import Features from './Features';
import './materialtheme.css';
import { Container } from '@material-ui/core';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className="layout-style">
          {this.props.children}
      </div>
    );
  }
}
