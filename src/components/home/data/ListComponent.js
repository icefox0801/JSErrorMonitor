'use strict';

import React from 'react';
import { Glyphicon, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

require('styles/home/data/List.scss');

class ListComponent extends React.Component {

  render() {
    const { list, type } = this.props;
    return (
      <Panel header={<p><span>{this.props.title}</span><Link to="/error/list/archive" className="pull-right">更多</Link></p>} className="home-data-list">
        <ListGroup fill>
          {!list.length ?
            <ListGroupItem key={0} bsStyle="warning">没有符合条件的结果</ListGroupItem> :
            list.map(function (archive, idx) {
              return (
                <ListGroupItem key={`${type}-${idx}`}>
                  <h4 className="list-group-item-heading">
                    <Glyphicon glyph="info-sign" className="text-danger"/>
                    <Link to={`/error/detail/${archive._id}`} className="text-danger">{archive.message}</Link>
                    <span className="label label-warning pull-right">{archive.count}</span>
                  </h4>
                  <p className="list-group-item-text text-primary page-url">
                    <a href={archive.url || 'javascript:void(0)'} target="_blank">{archive.url || '无'}</a>
                  </p>
                  <p className="list-group-item-text text-muted">{archive.latest} - {archive.earliest}</p>
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </Panel>
    );
  }
}

ListComponent.displayName = 'HomeDataListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
