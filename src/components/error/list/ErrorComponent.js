'use strict';

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col, Label } from 'react-bootstrap';
import { Link } from 'react-router';

import DropdownComponent from '../../common/DropdownComponent';
import RangeComponent from '../common/RangeComponent';
import PaginationComponent from '../common/PaginationComponent';
import SearchComponent from '../common/SearchComponent';
import * as dropdown from '../../../constants/dropdown';
import * as statusMap from '../../../constants/statusMap';
import { jsErrorAction, filterAction } from '../../../actions';

require('styles/error/list/Error.scss');

class ErrorComponent extends React.Component {
  componentDidMount () {
    this.fetchErrorList();
  }

  componentWillUnmount () {
    const { dispatch } = this.props;
    dispatch(filterAction.resetFilterProps());
  }
  // prevProps, prevState
  componentDidUpdate (prevProps) {
    // 深度遍历对象是否相等
    var flag = ['params', 'filter', 'global', 'status'].every(key => _.isEqual(this.props[key], prevProps[key]));

    if(!flag) this.fetchErrorList();
  }

  handleSelect (key, value) {
    const { dispatch, params } = this.props;
    _.set(params, 'page', 1);
    dispatch(filterAction.setFilterProps(key, value));
  }

  fetchErrorList () {
    const { dispatch, params, filter, status } = this.props;
    dispatch(jsErrorAction.fetchAllErrorList(Object.assign({}, params, filter, {status: status})));
  }

  render () {
    const { all } = this.props.jsError;
    const { params, filter } = this.props;
    const header = (
      <Row>
        <Col md={6}>错误<RangeComponent meta={all.meta} /></Col>
        <Col md={2}>浏览器</Col>
        <Col md={2}>操作系统</Col>
        <Col md={2}>日期</Col>
      </Row>
    );
    return (
      <div className="container-fluid" id="error-list-error">
        <div className="form-inline">
          <Row>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">每页数量：</label>
                <DropdownComponent list={dropdown.pageSize.list} placeholder={dropdown.pageSize.placeholder} selectKey={filter.pageSize} id="dropdown-page-size" handleSelect={key => this.handleSelect('pageSize', key)}/>
              </div>
            </Col>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">浏览器：</label>
                <DropdownComponent list={dropdown.browser.list} selectKey={filter.browser} placeholder={dropdown.browser.placeholder} id="dropdown-browser" handleSelect={key => this.handleSelect('browser', key)}/>
              </div>
            </Col>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">操作系统：</label>
                <DropdownComponent list={dropdown.os.list} selectKey={filter.os} placeholder={dropdown.os.placeholder} handleSelect={key => this.handleSelect('os', key)} id="dropdown-os" />
              </div>
            </Col>
            <Col md={3}>
              <SearchComponent handleSearch={value => this.handleSelect('keyword', value)}/>
            </Col>
          </Row>
        </div>

        <Panel header={header} id="error-list-error">
          <ListGroup fill>
            {!all.list.length ?
              <ListGroupItem key={0} bsStyle="warning">没有符合条件的结果</ListGroupItem> :
              all.list.map(function (error) {
                return (
                  <ListGroupItem key={error._id}>
                    <Row>
                      <Col md={6}>
                        <p>
                          <Link to={`/error/detail/${error._id}`} className={statusMap.textClassName[error.status]}>
                            <strong>『{statusMap.text[error.status]}』</strong>
                            <span>{error.message}</span>
                          </Link>
                        </p>
                      </Col>
                      <Col md={2}>
                        <p><Label bsStyle="default">{error.browser.family}</Label></p>
                      </Col>
                      <Col md={2}>
                        <p><Label bsStyle="info">{error.os.family}</Label></p>
                      </Col>
                      <Col md={2}>
                        <p className="text-muted">{error.fromNow}</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                );
              })
            }
          </ListGroup>
        </Panel>
        {all.list.length ?
          <PaginationComponent linkPrefix="/error/list/all/" page={params.page} total={all.meta.total} /> :
          ''}
      </div>
    );
  }
}

ErrorComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

ErrorComponent.displayName = 'ErrorListErrorComponent';

function mapStateToProps(state) {
  const { jsError, filter, global, status } = state;
  return { jsError, filter, global, status }
}

// Uncomment properties you need
ErrorComponent.propTypes = {};
ErrorComponent.defaultProps = {
  filter: {
    pageSize: 20,
    browser: 'all',
    os: 'all',
    keyword: ''
  },
  jsError: {
    all: {
      list: [],
      meta: {}
    }
  }
};

export default connect(mapStateToProps)(ErrorComponent);
