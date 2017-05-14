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
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(73, 190, 170, 0.3)',
            borderColor: 'rgba(73, 190, 170, 0.8)',
            pointBackgroundColor: '#fff',
            pointRadius: 4,
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
