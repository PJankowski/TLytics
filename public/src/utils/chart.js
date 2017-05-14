import Chart from 'chart.js';

const chartConfig = {
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
  data: [],
  label: '',
  fill: true,
  lineTension: 0.3,
  backgroundColor: 'rgba(73, 190, 170, 0.3)',
  borderColor: 'rgba(73, 190, 170, 0.8)',
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
  pointRadius: 4,
  pointHitRadius: 10,
  spanGaps: false,
};

const lineConfig = {
  labels: [],
  datasets: [],
};

class ChartClass {
  constructor(el, data, type) {
    this.el = el;
    this.data = data;
    this.type = type;
  }

  massageData() {
    const { data } = this;
    const dataObj = Object.assign({}, lineData, data.datasets[0]);
    const datasets = lineConfig.datasets.concat(dataObj);
    const labels = lineConfig.labels.concat(data.labels);
    return { datasets, labels };
  }

  create() {
    const { el, type } = this;
    const data = this.massageData();
    this.chart = new Chart(el, {
      type,
      data,
      options: chartConfig,
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
