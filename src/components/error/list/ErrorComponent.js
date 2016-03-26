'use strict';

import React from 'react';
import { Panel, ListGroup, ListGroupItem, DropdownButton, MenuItem, Row, Col, Label, Pagination, Alert, Input, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

require('styles/error/list/Error.scss');

class ErrorComponent extends React.Component {
  render() {
    const results = [
      {
        id: 'e12ea5d71d',
        name: 'Error: An Error Occurred!',
        date: '2016-03-22 16:26:09',
        url: 'http://bj.58.com/zptaobao/?PGTID=0d100000-0000-1128-816e-1e8d49ca2ea8&ClickID=1',
        count: 551
      },
      {
        id: 'e12ea5d71e',
        name: '对象不支持此属性或方法',
        date: '2016-03-22 16:26:09',
        url: 'http://bj.58.com/zptaobao/?PGTID=0d100000-0000-1128-816e-1e8d49ca2ea8&ClickID=1',
        count: 551
      },
      {
        id: 'e12ea5d71f',
        name: 'Error: An Error Occurred!',
        date: '2016-03-22 16:26:09',
        url: 'http://bj.58.com/zptaobao/?PGTID=0d100000-0000-1128-816e-1e8d49ca2ea8&ClickID=1',
        count: 551
      }
    ];

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
            <Col md={2}>
              <div className="form-group">
                <label htmlFor="">数量：</label>
                <DropdownButton title="每页数量" id="dropdown-page-number">
                  <MenuItem header>选择每页数量：</MenuItem>
                  <MenuItem eventKey="2">20个</MenuItem>
                  <MenuItem eventKey="3">50个</MenuItem>
                  <MenuItem eventKey="4">100个</MenuItem>
                </DropdownButton>
              </div>
            </Col>
            <Col md={2}>
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
            <Col md={8}>
              <div className="form-group">
                <label htmlFor="">关键词：</label>
                <Input type="text" buttonAfter={searchButton} />
              </div>
            </Col>
          </Row>
        </form>

        <Panel header={header} id="error-list-error">
          <ListGroup fill>
            {results.map(function (result) {
              return (
                <ListGroupItem>
                  <Row>
                    <Col md={6}>
                      <p><Link to={`/error/detail/${result.id}`} className="text-danger">{result.name}</Link></p>
                    </Col>
                    <Col md={2}>
                      <p><Label bsStyle="default">Internet Explorere 8</Label></p>
                    </Col>
                    <Col md={2}>
                      <p><Label bsStyle="info">Window XP with SP1</Label></p>
                    </Col>
                    <Col md={2}>
                      <p className="text-muted">{result.date}</p>
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

ErrorComponent.displayName = 'ErrorListErrorComponent';

// Uncomment properties you need
// ErrorComponent.propTypes = {};
// ErrorComponent.defaultProps = {};

export default ErrorComponent;
