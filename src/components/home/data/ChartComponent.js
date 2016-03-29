'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';
import { connect } from 'react-redux';

import { chart } from '../../../actions';

require('styles/home/data/Chart.scss');

class ChartComponent extends React.Component {

  componentDidMount() {

    const { dispatch } = this.props;
    dispatch(chart.fetchErrorTrendChart());
  }

  render() {

    const { trend } = this.props.chart;

    const config = {
      chart: {
        type: 'column',
        height: 200
      },

      title: {
        text: ''
      },

      xAxis: {
        categories: trend.x
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
        data: trend.y
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
// ChartComponent.defaultProps = {};

function mapStateToProps(state) {
  const { chart } = state;

  return {
    chart
  };
}

export default connect(mapStateToProps)(ChartComponent);
