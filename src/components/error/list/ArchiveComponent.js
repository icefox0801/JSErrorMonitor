'use strict';

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import DropdownComponent from '../../common/DropdownComponent';
import PaginationComponent from '../common/PaginationComponent';
import RangeComponent from '../common/RangeComponent';
import SearchComponent from '../common/SearchComponent';
import * as dropdown from '../../../constants/dropdown';
import * as statusMap from '../../../constants/statusMap';
import { jsErrorAction, filterAction } from '../../../actions';

require('styles/error/list/Archive.scss');

class ArchiveComponent extends React.Component {

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
    dispatch(jsErrorAction.fetchArchiveErrorList(Object.assign({}, params, filter, {status: status})));
  }

  render () {
    const { archives } = this.props.jsError;
    const { params, filter } = this.props;
    const header = (
      <Row>
        <Col md={5}>错误<RangeComponent meta={archives.meta} /></Col>
        <Col md={4}>地址</Col>
        <Col md={1}>最早</Col>
        <Col md={1}>最近</Col>
        <Col md={1}>数量</Col>
      </Row>
    );

    return (
      <div className="container-fluid" id="error-list-archive">
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

        <Panel header={header} >
          <ListGroup fill>
            {!archives.list.length ?
              <ListGroupItem key={0} bsStyle="warning">没有符合条件的结果</ListGroupItem> :
              archives.list.map(function (archive) {
                return (
                  <ListGroupItem key={archive._id}>
                    <Row>
                      <Col md={5}>
                        <p>
                          <Link to={`/error/detail/${archive._id}`} className={statusMap.textClassName[archive.status]}>
                            <strong>『{statusMap.text[archive.status]}』</strong>
                            <span>{archive.message}</span>
                          </Link>
                        </p>
                      </Col>
                      <Col md={4}>
                        <p><a href={archive.url || 'javascript:void(0)'} target="_blank">{archive.url || '无'}</a></p>
                      </Col>
                      <Col md={1}>
                        <p className="text-muted">{archive.earliest}</p>
                      </Col>
                      <Col md={1}>
                        <p className="text-muted">{archive.latest}</p>
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
        {archives.list.length ?
          <PaginationComponent linkPrefix="/error/list/archive/" page={params.page} total={archives.meta.total} /> :
          ''}
      </div>
    );
  }
}

ArchiveComponent.displayName = 'ErrorListArchiveComponent';

// Uncomment properties you need
ArchiveComponent.propTypes = {};
ArchiveComponent.defaultProps = {
  filter: {
    pageSize: 20,
    keyword: ''
  },
  jsError: {
    archives: {
      list: [],
      meta: {}
    }
  }
};

function mapStateToProps(state) {
  const { jsError, filter, global, status } = state;
  return { jsError, filter, global, status }
}

export default connect(mapStateToProps)(ArchiveComponent);
