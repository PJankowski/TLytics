import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Error.css';

@connect(store => store)
class Error extends Component {
  render() {
    return (
      <div className="Error">
        <p>{this.props.error.message}</p>
      </div>
    )
  }
}

export default Error;