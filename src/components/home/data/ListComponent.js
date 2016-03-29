'use strict';

import React from 'react';
import { Glyphicon, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { jsError } from '../../../actions';

require('styles/home/data/List.scss');

class ListComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(this.props.type === 'most' ? jsError.fetchMostErrorList() : jsError.fetchLatestErrorList());
  }
  render() {

    const list = this.props.jsError[this.props.type];
    const type = this.props.type;

    return (
      <Panel header={<p><span>{this.props.title}</span><Link to="/error/list/archive" className="pull-right">更多</Link></p>} className="home-data-list">
        <ListGroup fill>
          {list.map(function (error, idx) {
            return (
              <ListGroupItem key={`${type}-${idx}`}>
                <h4 className="list-group-item-heading">
                  <Glyphicon glyph="info-sign" className="text-danger" />
                  <Link to={`/error/detail/${error._id}`} className="text-danger">{error.message}</Link>
                  <span className="label label-warning pull-right">{error.count}</span>
                </h4>
                <p className="list-group-item-text text-primary page-url">
                  <a href={error.url || 'javascript:void(0)'} target="_blank">{error.url || '无'}</a>
                </p>
                <p className="list-group-item-text text-muted">{error.latest} - {error.earliest}</p>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Panel>
    );
  }
}

ListComponent.displayName = 'HomeDataListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

function mapStateToProps(state) {
  const { jsError } = state;

  return {
    jsError
  };
}

export default connect(mapStateToProps)(ListComponent);
