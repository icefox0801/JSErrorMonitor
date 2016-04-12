'use strict';

import React from 'react';

import TopbarComponent from '../common/TopbarComponent';
import StatusToggleComponent from '../common/StatusToggleComponent';
import TabsComponent from './common/TabsComponent';

require('styles/chart/Main.scss');

class MainComponent extends React.Component {

  render() {
    return (
      <div id="chart-main">
        <TopbarComponent />
        <div id="chart-section">
          <div className="error-main-header container-fluid">
            <h2>错误图表
              <StatusToggleComponent />
            </h2>
          </div>
          <TabsComponent />
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

MainComponent.displayName = 'ChartMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};

export default MainComponent;
