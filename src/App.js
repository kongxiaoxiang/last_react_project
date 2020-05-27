import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Admin from './containers/Admin/Admin'
import Login from './containers/Login/Login'
// import {Button} from 'antd'

export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/admin" component={Admin}/>
          <Route path="/login" component={Login}/>
          <Redirect to="/login"/>
        </Switch>
    )
  }
}
