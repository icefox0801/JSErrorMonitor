'use strict';

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';

import DropdownComponent from '../../common/DropdownComponent';
import PaginationComponent from '../common/PaginationComponent';
import RangeComponent from '../common/RangeComponent';
import SearchComponent from '../common/SearchComponent';
import * as dropdown from '../../../constants/dropdown';
import { jsErrorAction, filterAction } from '../../../actions';

require('styles/error/list/Page.scss');

class PageComponent extends React.Component {
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
    dispatch(jsErrorAction.fetchPageErrorList(Object.assign({}, params, filter, {status: status})));
  }

  render () {
    const { pages } = this.props.jsError;
    const { params, filter } = this.props;
    const header = (
      <Row>
        <Col md={6}>地址<RangeComponent meta={pages.meta} /></Col>
        <Col md={2}>最早</Col>
        <Col md={2}>最近</Col>
        <Col md={1}>归档</Col>
        <Col md={1}>数量</Col>
      </Row>
    );

    return (
      <div className="container-fluid" id="error-list-page">
        <form action="" className="form-inline">
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="">每页数量：</label>
                <DropdownComponent list={dropdown.pageSize.list} placeholder={dropdown.pageSize.placeholder} activeKey={filter.pageSize} id="dropdown-page-size" handleSelect={key => this.handleSelect('pageSize', key)}/>
              </div>
            </Col>
            <Col md={6}>
              <SearchComponent handleSearch={value => this.handleSelect('keyword', value)}/>
            </Col>
          </Row>
        </form>

        <Panel header={header}>
          <ListGroup fill>
            {!pages.list.length ?
              <ListGroupItem key={0} bsStyle="warning">没有符合条件的结果</ListGroupItem> :
              pages.list.map(function (archive) {
                return (
                  <ListGroupItem key={archive._id}>
                    <Row>
                      <Col md={6}>
                        <p><a href={archive.url || 'javascript:void(0)'} target="_blank">{archive.url || '无'}</a></p>
                      </Col>
                      <Col md={2}>
                        <p className="text-muted">{archive.earliest}</p>
                      </Col>
                      <Col md={2}>
                        <p className="text-muted">{archive.latest}</p>
                      </Col>
                      <Col md={1}>
                        <p><strong className="text-danger">{archive.archive}</strong></p>
                      </Col>
                      <Col md={1}>
                        <p><strong className="text-danger">{archive.count}</strong></p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                );
              })
            }
          </ListGroup>
        </Panel>
        {pages.list.length ?
          <PaginationComponent linkPrefix="/error/list/archive/" page={params.page} total={pages.meta.total} /> :
          ''}
      </div>
    );
  }
}

PageComponent.displayName = 'ErrorListPageComponent';

// Uncomment properties you need
// PageComponent.propTypes = {};
// PageComponent.defaultProps = {};

function mapStateToProps(state) {
  const { jsError, filter, global, status } = state;
  return { jsError, filter, global, status }
}

export default connect(mapStateToProps)(PageComponent);
