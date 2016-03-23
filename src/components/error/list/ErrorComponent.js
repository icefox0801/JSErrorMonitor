'use strict';

import React from 'react';
import { Panel, ListGroup, ListGroupItem, DropdownButton, MenuItem, Row, Col, Label, Pagination } from 'react-bootstrap';
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
        <Col md={5}>错误</Col>
        <Col md={2}>日期</Col>
        <Col md={2}>浏览器</Col>
        <Col md={2}>操作系统</Col>
        <Col md={1}>数量</Col>
      </Row>
    );
    return (
      <div className="container-fluid">
        <form action="" className="form-horizontal">
          <DropdownButton bsStyle="primary" title="选择日期" id="dropdown-size-medium">
            <MenuItem header>选择日期</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </form>
        <Panel header={header} id="error-list-error">
          <ListGroup fill>
            {results.map(function (result) {
              return (
                <ListGroupItem>
                  <Row>
                    <Col md={5}>
                      <p><Link to={`/error/detail/${result.id}`} className="text-danger">{result.name}</Link></p>
                    </Col>
                    <Col md={2}>
                      <p className="text-muted">{result.date}</p>
                    </Col>
                    <Col md={2}>
                      <p><Label bsStyle="default">Internet Explorere 8</Label></p>
                    </Col>
                    <Col md={2}>
                      <p><Label bsStyle="info">Window XP with SP1</Label></p>
                    </Col>
                    <Col md={1}>
                      <span>{result.count}</span>
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
