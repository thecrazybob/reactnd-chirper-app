import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveInitialData } from '../actions/shared'
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(receiveInitialData())
  }
  render() {
    return (
      <div>
        Starter Code
        {this.props.loading === true ? null : <Dashboard />}
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)