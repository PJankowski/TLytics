import Chart from 'chart.js';

const lineConfig = {
  global: {
    deafultFontColor: '#fff',
    defaultFontFamily: 'Roboto Mono',
    defaultFontSize: 16,
    defaultFontStyle: 'normal',
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: '#fff',
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: '#fff',
        },
      },
    ],
  },
};

const lineData = {
  labels: [],
  datasets: [],
  fill: true,
  lineTension: 0.3,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderColor: 'rgba(0, 0, 0, 0.8)',
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
  pointRadius: 0,
  pointHitRadius: 10,
  spanGaps: false,
};

class ChartClass {
  constructor(el, data, type) {
    this.el = el;
    this.data = data;
    this.type = type;
  }

  create() {
    const { el, data, type } = this;
    const dataset = Object.assign({}, lineData, data);
    this.chart = new Chart(el, {
      type,
      data: dataset,
      options: lineConfig,
    });
  }

  update(data, type) {
    this.data = data || this.data;
    this.type = type || this.type;

    this.create();
  }

  remove() {
    this.chart.destroy();
  }
}

export default ChartClass;
