'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';

require('styles/home/data/Chart.scss');

class ChartComponent extends React.Component {
  render() {
    const config = {
      chart: {
        type: 'column',
        height: 200
      },

      title: {
        text: ''
      },

      xAxis: {
        categories: ['3-10', '3-11', '3-12', '3-13', '3-14', '3-15', '3-16', '3-17', '3-18', '3-19', '3-20', '3-21', '3-22', '3-23', '3-24']
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: '错误数量'
        }
      },

      series: [{
        name: 'JS错误',
        showInLegend: false,
        data: [0, 0, 25, 10, 4, 7, 0, 1, 1, 30, 0, 1, 0, 0, 10]
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

ChartComponent.displayName = 'ErrorDataChartComponent';

// Uncomment properties you need
// ChartComponent.propTypes = {};
// ChartComponent.defaultProps = {};

export default ChartComponent;
