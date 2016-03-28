'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, DropdownButton, MenuItem, Row, Col, Label, Pagination, Alert, Input, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

import DropdownComponent from '../../common/DropdownComponent';
import { pageNum } from '../../../constants/dropdown';

import { fetchArchiveErrorList } from '../../../actions';

require('styles/error/list/Error.scss');

class ErrorComponent extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(fetchArchiveErrorList());
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
                <label htmlFor="">浏览器：</label>
                <DropdownButton title="浏览器" id="dropdown-browser-type">
                  <MenuItem header>选择浏览器：</MenuItem>
                  <MenuItem eventKey="2" className="checkbox">
                    <label><input type="checkbox" />&nbsp;Internet Explorer</label>
                  </MenuItem>
                  <MenuItem eventKey="3" className="checkbox">
                    <label><input type="checkbox" />&nbsp;Google Chrome</label>
                  </MenuItem>
                  <MenuItem eventKey="4" className="checkbox">
                    <label><input type="checkbox" />&nbsp;Mozilla Firefox</label>
                  </MenuItem>
                  <MenuItem eventKey="5" className="checkbox">
                    <label><input type="checkbox" />&nbsp;Opera</label>
                  </MenuItem>
                </DropdownButton>
              </div>
            </Col>
            <Col md={6}>
              <Input label="关键词：" type="text" buttonAfter={searchButton} />
            </Col>
          </Row>
        </form>

        <Panel header={header} id="error-list-error">
          <ListGroup fill>
            {this.props.jsError.all.map(function (error) {
              return (
                <ListGroupItem>
                  <Row>
                    <Col md={6}>
                      <p><Link to={`/error/detail/${error._id}`} className="text-danger"><Label bsStyle="danger">{error.status}</Label>{error.message}</Link></p>
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
        <Pagination className="pull-right" prev next first last ellipsis boundaryLinks items={20} maxButtons={5} activePage={1} />
      </div>
    );
  }
}

ErrorComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

ErrorComponent.displayName = 'ErrorListErrorComponent';

function mapStateToProps(state) {
  const { jsError, routing } = state;

  return {
    jsError,
    routing
  }
}

// Uncomment properties you need
// ErrorComponent.propTypes = {};
// ErrorComponent.defaultProps = {};

export default connect(mapStateToProps)(ErrorComponent);
