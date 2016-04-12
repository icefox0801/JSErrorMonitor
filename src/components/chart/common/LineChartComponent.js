'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';

require('styles/chart/common/LineChart.scss');

class LineChartComponent extends React.Component {
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
      series: [{
        name: 'JS错误',
        showInLegend: false,
        data: data.plots,
        pointStart: data.meta.start,
        pointInterval: data.meta.interval
      }]
    };

    return (
      <Panel header={<p>近期页面错误趋势</p>}>
        <div>
          <ReactHighcharts config={config} />
        </div>
      </Panel>
    );
  }
}

LineChartComponent.displayName = 'ChartCommonLineChartComponent';

// Uncomment properties you need
// LineChartComponent.propTypes = {};
LineChartComponent.defaultProps = {
  data: {
    plots: [],
    meta: {}
  }
};

export default LineChartComponent;
