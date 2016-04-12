'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';

require('styles/chart/common/PieChart.scss');

class PieChartComponent extends React.Component {
  render() {
    const { data, title } = this.props;
    const config = {
      chart: {
        type: 'pie',
        height: 400
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: '比例',
        colorByPoint: true,
        data: data.plots
        //[{
        //  name: 'Microsoft Internet Explorer',
        //  y: 56.33
        //}, {
        //  name: 'Chrome',
        //  y: 24.03,
        //  sliced: true,
        //  selected: true
        //}, {
        //  name: 'Firefox',
        //  y: 10.38
        //}, {
        //  name: 'Safari',
        //  y: 4.77
        //}, {
        //  name: 'Opera',
        //  y: 0.91
        //}, {
        //  name: 'Proprietary or Undetectable',
        //  y: 0.2
        //}]
      }]
    };

    return (
      <Panel header={<p>{title}</p>}>
        <div>
          <ReactHighcharts config={config} />
        </div>
      </Panel>
    );
  }
}

PieChartComponent.displayName = 'ChartCommonPieChartComponent';

// Uncomment properties you need
// PieChartComponent.propTypes = {};
PieChartComponent.defaultProps = {
  title: '',
  plots: []
};

export default PieChartComponent;
