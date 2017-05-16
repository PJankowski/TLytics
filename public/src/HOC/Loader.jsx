/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import LoaderComponent from 'Components/Loader';

const LoaderHOC = (WrappedComponent) => {
  return class Loader extends Component {
    render() {
      return this.props.channel.url === '' ? <LoaderComponent /> : <WrappedComponent {...this.props} />;
    }
  };
};

export default LoaderHOC;
