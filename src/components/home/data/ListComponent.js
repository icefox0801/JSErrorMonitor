'use strict';

import React from 'react';
import { Glyphicon, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

require('styles/home/data/List.scss');

class ListComponent extends React.Component {
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

    return (
      <Panel header={<p><span>最近的错误</span><a className="pull-right" href="#">更多</a></p>} className="home-data-list">
        <ListGroup fill>
          {results.map(function (result) {
            return (
              <ListGroupItem>
                <h4 className="list-group-item-heading">
                  <Glyphicon glyph="info-sign" className="text-danger" />
                  <Link to="home" className="text-danger">{result.name}</Link>
                  <span className="label label-warning pull-right">{result.count}</span>
                </h4>
                <p className="list-group-item-text text-primary page-url">
                  <a href={result.url} target="_blank">{result.url}</a>
                </p>
                <p className="list-group-item-text text-muted">{result.date}</p>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Panel>
    );
  }
}

ListComponent.displayName = 'ErrorDataListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
