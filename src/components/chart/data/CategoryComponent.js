'use strict';

import _ from 'lodash';
import nprogress from 'nprogress';
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import PieChartComponent from '../common/PieChartComponent';

import { chartAction } from '../../../actions';
import * as dropdown from '../../../constants/dropdown';

require('styles/chart/data/Category.scss');

class CategoryComponent extends React.Component {
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
    var p1 = dispatch(chartAction.fetchErrorBrowserChart({ status }));
    var p2 = dispatch(chartAction.fetchErrorOsChart({ status }));
    var p3 = dispatch(chartAction.fetchErrorBusinessChart({ status }));
    var p4 = dispatch(chartAction.fetchErrorPlatformChart({ status }));
    Promise.all([p1, p2, p3, p4]).then(() => { nprogress.done(); });
  }

  render() {
    const { chart, global, status } = this.props;
    const timeRangeText = _.chain(dropdown.timeRange.list).find({key: Number(global.timeRange)}).value().value;
    const statusText = _.chain(dropdown.status.list).find({key: status}).value().value;
    const chartTitle = `${timeRangeText}内${statusText}的错误`;
    return (
      <div id="chart-data-category">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <PieChartComponent data={chart.browser} title="按浏览器" chartTitle={chartTitle} />
            </Col>
            <Col md={6}>
              <PieChartComponent data={chart.os} title="按操作系统" chartTitle={chartTitle} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <PieChartComponent data={chart.business} title="按业务线" chartTitle={chartTitle} />
            </Col>
            <Col md={6}>
              <PieChartComponent data={chart.platform} title="按平台" chartTitle={chartTitle} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

CategoryComponent.displayName = 'ChartDataCategoryComponent';

// Uncomment properties you need
// CategoryComponent.propTypes = {};
CategoryComponent.defaultProps = {
  chart: {}
};

function mapStateToProps(state) {
  const { global, status, chart } = state;
  return { global, status, chart };
}

export default connect(mapStateToProps)(CategoryComponent);
