// import c3 from 'c3';
import Chart from 'chart.js';
// import 'c3/c3.css';

class ChartClass {
  constructor(el, data, type) {
    this.el = el;
    this.data = data;
    this.type = type;
  }

  create() {
    const { el, data, type } = this;
    this.chart = new Chart(el, {
      type,
      data,
      options: {
        global: {
          deafultFontColor: '#fff',
          defaultFontFamily: 'Roboto Mono',
          defaultFontSize: 16,
          defaultFontStyle: 'normal',
        },
        legend: {
          display: false,
        },
      },
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
