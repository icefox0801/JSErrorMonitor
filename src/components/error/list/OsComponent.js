'use strict';

import _ from 'lodash';
import nprogress from 'nprogress';
import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col, Accordion, Alert } from 'react-bootstrap';
import { Link } from 'react-router';

import { jsErrorAction, filterAction } from '../../../actions';

require('styles/error/list/Os.scss');

class OsComponent extends React.Component {
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
    dispatch(jsErrorAction.fetchOSErrorList(Object.assign({}, params, filter, {status: status}))).then(() => { nprogress.done(); });
  }

  handleNavigate (os) {
    const { dispatch } = this.props;
    dispatch(filterAction.setFilterProps('os', os));
  }

  render () {
    const { os } = this.props.jsError;
    var self = this;
    return (
      <div className="container-fluid" id="error-list-os">
        <Accordion defaultActiveKey={0}>
          {!os.list.length ?
            <Alert bsStyle="warning">没有符合条件的结果</Alert> :
            os.list.map(function (system, idx) {
              var header = (
                <Row>
                  <Col md={5}>{system.family}</Col>
                  <Col md={5}><small className="text-muted">版本范围：{system.min} - {system.max}</small></Col>
                  <Col md={2}><strong className="text-danger">{system.count}</strong></Col>
                </Row>
              );

              return (
                <Panel header={header} eventKey={idx} bsStyle="default" key={`system_${idx}`}>
                  <ListGroup fill>
                    {system.versions && system.versions.map((version, idx) => (
                      <ListGroupItem key={version._id}>
                        <Row>
                          <Col md={5}>
                            <p><Link to="/error/list/all/1" className="text-primary" key={idx} onClick={evt => self.handleNavigate(version.family, evt)}>{version.family}</Link></p>
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

OsComponent.displayName = 'ErrorListOSComponent';

// Uncomment properties you need
OsComponent.propTypes = {};
OsComponent.defaultProps = {
  filter: {},
  jsError: {
    os: {
      list: []
    }
  }
};

function mapStateToProps(state) {
  const { jsError, filter, global, status } = state;
  return { jsError, filter, global, status }
}

export default connect(mapStateToProps)(OsComponent);
