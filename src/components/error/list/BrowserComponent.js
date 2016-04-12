'use strict';

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col, Accordion, Alert } from 'react-bootstrap';
import { Link } from 'react-router';

import { jsErrorAction, filterAction } from '../../../actions';

require('styles/error/list/Browser.scss');

class BrowserComponent extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(filterAction.resetFilterProps());
    this.fetchErrorList();
  }
  // prevProps, prevState
  componentDidUpdate (prevProps) {
    // 深度遍历对象是否相等
    var flag = ['params', 'filter', 'global', 'status'].every(key => _.isEqual(this.props[key], prevProps[key]));

    if(!flag) this.fetchErrorList();
  }

  fetchErrorList () {
    const { dispatch, params, filter, status } = this.props;
    dispatch(jsErrorAction.fetchBrowserErrorList(Object.assign({}, params, filter, {status: status})));
  }

  handleNavigate (browser) {
    const { dispatch } = this.props;
    dispatch(filterAction.setFilterProps('browser', browser));
  }

  render () {
    const { browsers } = this.props.jsError;
    var self = this;
    return (
      <div className="container-fluid" id="error-list-browser">
        <Accordion defaultActiveKey={0}>
          {!browsers.list.length ?
            <Alert bsStyle="warning">没有符合条件的结果</Alert> :
            browsers.list.map(function (browser, idx) {
              var header = (
                <Row>
                  <Col md={5}>{browser.family}</Col>
                  <Col md={5}><small className="text-muted">版本范围：{browser.min} - {browser.max}</small></Col>
                  <Col md={2}><strong className="text-danger">{browser.count}</strong></Col>
                </Row>
              );

              return (
                <Panel header={header} eventKey={idx} bsStyle="default" key={`browser_${idx}`}>
                  <ListGroup fill>
                    {browser.versions && browser.versions.map((version, idx) => (
                        <ListGroupItem key={version._id}>
                          <Row>
                            <Col md={5}>
                              <p><Link to='/error/list/all/1' className="text-primary" key={idx} onClick={evt => self.handleNavigate(version.family, evt)}>{version.family}</Link></p>
                            </Col>
                            <Col md={5}>
                              <p className="text-muted">版本：{version.version}</p>
                            </Col>
                            <Col md={2}>
                              <p><strong className="text-danger">{version.count}</strong></p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      )
                    )}
                  </ListGroup>
                </Panel>
              );
            })
          }
        </Accordion>
      </div>
    );
  }
}

BrowserComponent.displayName = 'ErrorListBrowserComponent';

// Uncomment properties you need
BrowserComponent.propTypes = {};
BrowserComponent.defaultProps = {
  filter: {},
  jsError: {
    browsers: {
      list: []
    }
  }
};

function mapStateToProps(state) {
  const { jsError, filter, global, status } = state;
  return { jsError, filter, global, status }
}

export default connect(mapStateToProps)(BrowserComponent);
