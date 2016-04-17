'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';

import LoadingComponent from '../../common/LoadingComponent';
import PercentageToggleComponent from './PercentageToggleComponent';

require('styles/chart/common/PieChart.scss');

class PieChartComponent extends React.Component {

  constructor (props) {
    super(props);
    const showType = 'percentage';
    this.state = { showType, loading: true };
  }
  // nextProps
  componentWillReceiveProps () {
    this.setState({ loading: false });
  }

  handleChange (value) {
    this.setState({
      showType: value
    });
  }

  render() {
    const { data, title, chartTitle } = this.props;
    const { loading, showType } = this.state;
    const dataStr = (showType === 'number' ? '{point.y}' : '{point.percentage:.1f}%');
    const header = (
      <div>
        <span>{title}</span>
        <PercentageToggleComponent handleChange={value => this.handleChange(value)} className="pull-right"/>
      </div>
    );
    const config = {
      chart: {
        type: 'pie',
        height: 400
      },
      title: {
        text: chartTitle
      },
      tooltip: {
        pointFormat: '{series.name}: <b>' + dataStr + '</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          size: 180,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: ' + dataStr
          }
        }
      },
      series: [{
        name: (showType === 'number' ? '数量' : '比例'),
        colorByPoint: true,
        data: data.plots
      }]
    };

    return (
      <Panel header={header}>
        <div>
          {loading ? <LoadingComponent type="bars" /> : <ReactHighcharts config={config} showType={showType} />}
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
