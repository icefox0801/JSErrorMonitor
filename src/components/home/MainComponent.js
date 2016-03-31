'use strict';
// 库依赖
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
// 组件依赖
import TopbarComponent from '../common/TopbarComponent';
import ListComponent from './data/ListComponent';
import ChartComponent from './data/ChartComponent';
// redux依赖
import { chartAction, jsErrorAction } from '../../actions';
// css样式
require('styles/home/Main.scss');

class MainComponent extends React.Component {

  componentDidUpdate (prevProps, prevState) {
    const { global } = this.props;
    // 深度遍历对象是否相等
    if(!_.isEqual(global, prevProps.global)) this.fetchData();

  }

  fetchData () {
    const { dispatch } = this.props;
    dispatch(chartAction.fetchErrorTrendChart());
    dispatch(jsErrorAction.fetchMostErrorList());
    dispatch(jsErrorAction.fetchLatestErrorList());
  }

  render() {
    const { chart, jsError } = this.props;
    return (
      <div className="home-main">
        <TopbarComponent />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <ChartComponent chart={chart}/>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ListComponent title="最多的错误" type="most" list={jsError.most} />
            </Col>
            <Col md={6}>
              <ListComponent title="最近的错误" type="latest" list={jsError.latest} />
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
MainComponent.defaultProps = {
  global: {
    timeRange: 24,
    business: 'all',
    platform: 'pc'
  }
};

function mapStateToProps(state) {
  const { global, chart, jsError } = state;
  return { global, chart, jsError };
}

export default connect(mapStateToProps)(MainComponent);
