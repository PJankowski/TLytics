import c3 from 'c3';
import 'c3/c3.css';

class Chart {
  constructor(el, columns, type) {
    this.el = el;
    this.columns = columns;
    this.type = type;
  }

  create() {
    const { el, columns, type } = this;
    this.chart = c3.generate({
      bindto: el,
      data: {
        columns,
        type,
      },
    });
  }

  update(columns, type) {
    this.columns = columns || this.columns;
    this.type = type || this.type;

    this.create();
  }

  remove() {
    this.chart.destroy();
  }
}

export default Chart;
