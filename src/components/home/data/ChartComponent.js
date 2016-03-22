'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';

require('styles/home/data/Chart.scss');

class ChartComponent extends React.Component {
  render() {
    return (
      <Panel header={<p>近期页面错误趋势</p>}>
          <p>图表</p>
      </Panel>
    );
  }
}

ChartComponent.displayName = 'ErrorDataChartComponent';

// Uncomment properties you need
// ChartComponent.propTypes = {};
// ChartComponent.defaultProps = {};

export default ChartComponent;
