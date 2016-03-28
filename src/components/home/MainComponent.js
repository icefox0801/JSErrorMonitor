'use strict';

import React from 'react';
import ListComponent from './data/ListComponent';
import ChartComponent from './data/ChartComponent';
import { Grid, Row, Col } from 'react-bootstrap';

require('styles/home/Main.scss');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="home-main">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <ChartComponent />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ListComponent title="最多的错误" type="most" />
            </Col>
            <Col md={6}>
              <ListComponent title="最近的错误" type="latest" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

MainComponent.displayName = 'HomeMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
