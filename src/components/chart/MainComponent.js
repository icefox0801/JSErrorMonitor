'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';

import TopbarComponent from '../common/TopbarComponent';

require('styles/chart/Main.scss');

class MainComponent extends React.Component {

  render() {
    const config = {};
    return (
      <div id="chart-main">
        <TopbarComponent />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Panel header={<p>近期页面错误趋势</p>}>
                <div id="data-chart">
                  <ReactHighcharts config={config} />
                </div>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

MainComponent.displayName = 'ChartMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
