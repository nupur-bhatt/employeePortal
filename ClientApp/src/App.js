import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import './custom.css'
import Employee from './components/Employee';
import Departments from './components/Departments';
import Locations from './components/Locations';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className="app-style">
         <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/employees' component={Employee} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/locations' component={Locations} />
      </Layout>
      </div>
    );
  }
}
