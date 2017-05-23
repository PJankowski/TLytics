import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import LoaderHOC from 'HOC/Loader';

import DashboardHeader from 'Components/DashboardHeader';

import Chart from 'Utility/chart';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [],
        datasets: [],
      },
      type: 'line',
    };
  }

  componentDidMount() {
    this.setupChartData();
  }

  setupChartData() {
    const { channel } = this.props;
    const labels = channel.chartFollowers.map(follower => moment(follower.date).format('MM-DD-YYYY'));
    const followers = channel.chartFollowers.map(follower => follower.followers);
    this.state.chartData.labels = labels;
    this.state.chartData.datasets.push({ label: 'Followers', data: followers });
    const chart = new Chart('chart', this.state.chartData, this.state.type);
    chart.create();
  }

  render() {
    const { user, channel } = this.props;
    return (
      <div style={{ display: 'block', width: '100%' }}>
        <DashboardHeader user={user} channel={channel} />
        <canvas id="chart" height="400" width="1000" />
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object,
  channel: PropTypes.object,
};

Dashboard.defaultProps = {
  user: {},
  channel: {},
  dispatch: () => {},
  getDashboardData: () => {},
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    channel: state.channel,
  };
};

export default connect(mapStateToProps)(LoaderHOC(Dashboard));
