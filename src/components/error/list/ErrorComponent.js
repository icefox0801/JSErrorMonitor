'use strict';

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col, Label, Input, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';


import PaginationComponent from '../../common/PaginationComponent';
import DropdownComponent from '../../common/DropdownComponent';
import { pageSize, browser, os } from '../../../constants/dropdown';
import { jsErrorAction, filterAction } from '../../../actions';

require('styles/error/list/Error.scss');

class ErrorComponent extends React.Component {

  componentDidMount () {
    this.fetchErrorList();
  }

  componentDidUpdate (prevProps, prevState) {
    // 深度遍历对象是否相等
    var flag = ['params', 'filter', 'global'].every(key => _.isEqual(this.props[key], prevProps[key]));

    if(!flag) this.fetchErrorList();

    return !flag;
  }

  handleSelect (key, value) {
    const { dispatch, filter, params } = this.props;
    _.set(params, 'page', 1);
    dispatch(filterAction.setFilterProps(key, value));
  }

  fetchErrorList () {
    const { dispatch, params, filter } = this.props;
    dispatch(jsErrorAction.fetchAllErrorList(Object.assign({}, params, filter)));
  }

  render () {
    const header = (
      <Row>
        <Col md={6}>错误</Col>
        <Col md={2}>浏览器</Col>
        <Col md={2}>操作系统</Col>
        <Col md={2}>日期</Col>
      </Row>
    );

    const searchButton = (
      <Button bsStyle="primary"><Glyphicon glyph="search" />&nbsp;搜索</Button>
    );

    const { all } = this.props.jsError;
    const { params, filter } = this.props;

    return (
      <div className="container-fluid" id="error-list-error">
        <form action="" className="form-inline">
          <Row>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">每页数量：</label>
                <DropdownComponent list={pageSize.list} placeholder={pageSize.placeholder} activeKey={filter.pageSize} id="dropdown-page-size" handleSelect={key => this.handleSelect('pageSize', key)}/>
              </div>
            </Col>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">浏览器：</label>
                <DropdownComponent list={browser.list} placeholder={browser.placeholder} id="dropdown-browser" />
              </div>
            </Col>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">操作系统：</label>
                <DropdownComponent list={os.list} placeholder={os.placeholder} id="dropdown-os" />
              </div>
            </Col>
            <Col md={3}>
              <Input type="text" buttonAfter={searchButton} />
            </Col>
          </Row>
        </form>

        <Panel header={header} id="error-list-error">
          <ListGroup fill>
            {all.list.map(function (error) {
              return (
                <ListGroupItem key={error._id}>
                  <Row>
                    <Col md={6}>
                      <p><Link to={`/error/detail/${error._id}`} className="text-danger"><strong>『{error.status === 'open' ? '未解决' : '已解决'}』</strong>{error.message}</Link></p>
                    </Col>
                    <Col md={2}>
                      <p><Label bsStyle="default">{error.browser.name}</Label></p>
                    </Col>
                    <Col md={2}>
                      <p><Label bsStyle="info">{error.os.name}</Label></p>
                    </Col>
                    <Col md={2}>
                      <p className="text-muted">{error.fromNow}</p>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Panel>
        <PaginationComponent linkPrefix="/error/list/all/" page={params.page} total={all.meta.total} />
      </div>
    );
  }
}

ErrorComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

ErrorComponent.displayName = 'ErrorListErrorComponent';

function mapStateToProps(state) {
  const { jsError, filter } = state;
  return { jsError, filter }
}

// Uncomment properties you need
ErrorComponent.propTypes = {};
ErrorComponent.defaultProps = {
  filter: {
    pageSize: 20
  }
};

export default connect(mapStateToProps)(ErrorComponent);
