import React, { Component } from 'react';
import './materialtheme.css';

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
