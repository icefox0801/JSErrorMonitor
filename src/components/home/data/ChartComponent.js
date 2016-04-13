'use strict';

import React from 'react';
import moment from 'moment'
import Highcharts from 'highcharts';
import { Panel } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';

require('styles/home/data/Chart.scss');

class ChartComponent extends React.Component {
  render() {
    const { data } = this.props;
    const config = {
      chart: {
        type: 'line',
        height: 200
      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: '错误数量'
        }
      },
      tooltip: {
        headerFormat: '',
        pointFormatter: function () {
          return `<span style="font-size: 10px">${moment(this.x).format('MM-DD HH:mm')} 至 ${moment(this.x).add(data.meta.interval, 'ms').format('MM-DD HH:mm')}</span><br/><span style="color:${this.color}">\u25CF</span> ${this.series.name}: <b>${this.y}</b><br/>`;
        }
      },
      series: [{
        name: '错误数量',
        showInLegend: false,
        data: data.plots,
        pointStart: data.meta.start,
        pointInterval: data.meta.interval
      }]
    };

    return (
      <Panel header={<p>近期页面错误趋势</p>}>
        <div id="data-chart">
          <ReactHighcharts config={config} />
        </div>
      </Panel>
    );
  }
}

ChartComponent.displayName = 'HomeDataChartComponent';

// Uncomment properties you need
// ChartComponent.propTypes = {};
ChartComponent.defaultProps = {
  data: {
    plots: [],
    meta: {}
  }
};

export default ChartComponent;
