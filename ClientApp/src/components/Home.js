import React, { Component } from 'react';
import Features from './Features';
import './materialtheme.css';

export class Home extends Component {

  static displayName = Home.name;

  render () {
    return (
      <div className="home-style">
          <Features/>
      </div>
    );
  }
}
