import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getDashboardData from '../../actions/DashboardActions';
import Chart from '../../utils/chart';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(239, 118, 122, 0.8)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#fff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          },
        ],
      },
      type: 'line',
    };
  }

  componentDidMount() {
    this.props.dispatch(this.props.getDashboardData());

    const chart = new Chart('chart', this.state.chartData, this.state.type);
    chart.create();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Welcome { user.display_name }!</h1>
        <canvas id="chart" height="832" width="2084" />
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  getDashboardData: PropTypes.func,
};

Dashboard.defaultProps = {
  user: {},
  dispatch: () => {},
  getDashboardData: () => {},
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    channel: state.channel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDashboardData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
