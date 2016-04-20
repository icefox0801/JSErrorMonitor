'use strict';

import _ from 'lodash';
import nprogress from 'nprogress';
import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col, Accordion, Alert } from 'react-bootstrap';
import { Link } from 'react-router';

import { jsErrorAction, filterAction } from '../../../actions';

import LoadingComponent from '../../common/LoadingComponent';

require('styles/error/list/Browser.scss');

class BrowserComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { loading: true };
  }
  // nextProps
  componentWillReceiveProps () {
    this.setState({ loading: false });
  }

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
    nprogress.start();
    dispatch(jsErrorAction.fetchBrowserErrorList(Object.assign({}, params, filter, {status: status}))).then(() => { nprogress.done(); });
  }

  handleNavigate (browser) {
    const { dispatch } = this.props;
    dispatch(filterAction.setFilterProps('browser', browser));
  }

  render () {
    const { browsers } = this.props.jsError;
    const { loading } = this.state;
    var self = this;
    return (
      <div className="container-fluid" id="error-list-browser">
        <Accordion defaultActiveKey={0}>
          {loading ? <LoadingComponent /> :
            !browsers.list.length ?
            <Alert bsStyle="warning">没有符合条件的结果</Alert> :
            browsers.list.map(function (browser, idx) {
              var header = (
                <Row>
                  <Col xs={12} sm={5}>{browser.family}</Col>
                  <Col xs={10} sm={5}><small className="text-muted">版本范围：{browser.min} - {browser.max}</small></Col>
                  <Col xs={2} sm={2}><strong className="text-danger">{browser.count}</strong></Col>
                </Row>
              );

              return (
                <Panel header={header} eventKey={idx} bsStyle="default" key={`browser_${idx}`}>
                  <ListGroup fill>
                    {browser.versions && browser.versions.map((version, idx) => (
                        <ListGroupItem key={`browser_${idx}`}>
                          <Row>
                            <Col xs={12} sm={5} xsHidden>
                              <p><Link to='/error/list/all/1' className="text-primary" onClick={evt => self.handleNavigate(version.family, evt)}>{version.family}</Link></p>
                            </Col>
                            <Col xs={10} sm={5}>
                              <p className="text-muted">版本：{version.version}</p>
                            </Col>
                            <Col xs={2} sm={2}>
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
