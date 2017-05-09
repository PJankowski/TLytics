import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(store => store)
class Dashboard extends Component {
  componentDidMount() {
    if (this.props.user.token === "") {
      this.props.history.push("/login");
    }
  }
  
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard;