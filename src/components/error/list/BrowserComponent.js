'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col, Pagination, Input, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

import DropdownComponent from '../../common/DropdownComponent';
import { pageNum, timeRange } from '../../../constants/dropdown';
import { jsError } from '../../../actions';

require('styles/error/list/Browser.scss');

class BrowserComponent extends React.Component {
  componentDidMount () {
    const { dispatch, params } = this.props;
    dispatch(jsError.fetchBrowserErrorList(params));
  }
  render () {

    const header = (
      <Row>
        <Col md={5}>浏览器</Col>
        <Col md={5}>版本范围</Col>
        <Col md={2}>数量</Col>
      </Row>
    );

    const searchButton = (
      <Button bsStyle="primary"><Glyphicon glyph="search" />&nbsp;搜索</Button>
    );

    const { browsers } = this.props.jsError;

    return (
      <div className="container-fluid" id="error-list-error">
        <form action="" className="form-inline">
          <Row>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">每页数量：</label>
                <DropdownComponent list={pageNum.list} placeholder={pageNum.placeholder} id="dropdown-page-number" />
              </div>
            </Col>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">时间范围：</label>
                <DropdownComponent list={timeRange.list} placeholder={timeRange.placeholder} id="dropdown-time-range" />
              </div>
            </Col>
            <Col md={6}>
              <Input label="关键词：" type="text" buttonAfter={searchButton} />
            </Col>
          </Row>
        </form>

        <Panel header={header} id="error-list-archive">
          <ListGroup fill>
            {browsers.list.map(function (browser, idx) {
              return (
                <ListGroupItem key={browser._id}>
                  <Row>
                    <Col md={5}>
                      <p><Link to={`/error/detail/${idx}`} className="text-primary">{browser.name}</Link></p>
                    </Col>
                    <Col md={5}>
                      <p>{browser.min} - {browser.max}</p>
                    </Col>
                    <Col md={2}>
                      <p><strong className="text-danger">{browser.count}</strong></p>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Panel>
        <Pagination className="pull-right" prev next first last ellipsis boundaryLinks items={20} maxButtons={5} activePage={1} />
      </div>
    );
  }
}

BrowserComponent.displayName = 'ErrorListBrowserComponent';

// Uncomment properties you need
// BrowserComponent.propTypes = {};
// BrowserComponent.defaultProps = {};

function mapStateToProps(state) {
  const { jsError } = state;

  return {
    jsError
  }
}

export default connect(mapStateToProps)(BrowserComponent);
