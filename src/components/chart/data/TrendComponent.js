'use strict';

import _ from 'lodash';
import nprogress from 'nprogress';
import React from 'react';
import { connect } from 'react-redux';
import { chartAction } from '../../../actions';

import LineChartComponent from '../common/LineChartComponent';

require('styles/chart/data/Trend.scss');

class TrendComponent extends React.Component {
  componentDidMount () {
    this.fetchData();
  }
  // prevProps, prevState
  componentDidUpdate (prevProps) {
    // 深度遍历对象是否相等
    var flag = ['global', 'status'].every(key => _.isEqual(this.props[key], prevProps[key]));

    if(!flag) this.fetchData();
  }

  fetchData () {
    const { dispatch, status } = this.props;
    nprogress.start();
    dispatch(chartAction.fetchErrorTrendChart({ status })).then(() => { nprogress.done(); });
  }

  render() {
    const { chart } = this.props;
    return (
      <div id="chart-data-trend">
        <LineChartComponent data={chart.trend} />
      </div>
    );
  }
}

TrendComponent.displayName = 'ChartDataTrendComponent';

// Uncomment properties you need
// TrendComponent.propTypes = {};
TrendComponent.defaultProps = {
  chart: {}
};

function mapStateToProps(state) {
  const { global, status, chart } = state;
  return { global, status, chart };
}

export default connect(mapStateToProps)(TrendComponent);
