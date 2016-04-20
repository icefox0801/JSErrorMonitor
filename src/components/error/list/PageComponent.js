'use strict';

import _ from 'lodash';
import nprogress from 'nprogress';
import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';

import LoadingComponent from '../../common/LoadingComponent';
import DropdownComponent from '../../common/DropdownComponent';
import PaginationComponent from '../common/PaginationComponent';
import RangeComponent from '../common/RangeComponent';
import SearchComponent from '../common/SearchComponent';
import * as dropdown from '../../../constants/dropdown';
import { jsErrorAction, filterAction } from '../../../actions';

require('styles/error/list/Page.scss');

class PageComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { loading: true };
  }
  // nextProps
  componentWillReceiveProps () {
    this.setState({ loading: false });
  }

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
    nprogress.start();
    dispatch(jsErrorAction.fetchPageErrorList(Object.assign({}, params, filter, {status: status}))).then( () => { nprogress.done(); });
  }

  render () {
    const { pages } = this.props.jsError;
    const { params, filter } = this.props;
    const { loading } = this.state;
    const header = (
      <Row>
        <Col sm={6} xs={12}>地址<RangeComponent meta={pages.meta} /></Col>
        <Col sm={2} xsHidden>最早</Col>
        <Col sm={2} xsHidden>最近</Col>
        <Col md={1} xsHidden smHidden>归档</Col>
        <Col md={1} xsHidden smHidden>数量</Col>
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
            {loading ? <LoadingComponent /> :
              !pages.list.length ?
              <ListGroupItem key={0} bsStyle="warning">没有符合条件的结果</ListGroupItem> :
              pages.list.map((page, idx) => (
                <ListGroupItem key={idx}>
                  <Row>
                    <Col sm={6} xs={12}>
                      <p><a href={page.url || 'javascript:void(0)'} target="_blank">{page.url || '无'}</a></p>
                    </Col>
                    <Col sm={2} xsHidden>
                      <p className="text-muted">{page.earliest}</p>
                    </Col>
                    <Col sm={2} xsHidden>
                      <p className="text-muted">{page.latest}</p>
                    </Col>
                    <Col md={1} xsHidden smHidden>
                      <p><strong className="text-danger">{page.archive}</strong></p>
                    </Col>
                    <Col md={1} xsHidden smHidden>
                      <p><strong className="text-danger">{page.count}</strong></p>
                    </Col>
                    <Col xs={8} smHidden mdHidden lgHidden>
                      <p><strong className="text-danger">{page.earliest} ~ {page.latest}</strong></p>
                    </Col>
                    <Col xs={4} sm={2} mdHidden lgHidden>
                      <p><strong className="text-danger">{page.count} / {page.archive}</strong></p>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))
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
