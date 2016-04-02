'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Pagination } from 'react-bootstrap';

require('styles/error/common/Pagination.scss');

class PaginationComponent extends React.Component {

  pageTo (obj) {
    const { dispatch, linkPrefix } = this.props;
    dispatch(push(linkPrefix + obj.eventKey));
  }

  render() {

    const { total, page } = this.props;

    return (
      <Pagination className="pull-right" prev next first last ellipsis boundaryLinks items={total} maxButtons={5} activePage={parseInt(page, 10)} onSelect={(event, obj) => this.pageTo(obj)}/>
    );
  }
}

PaginationComponent.displayName = 'ErrorCommonPaginationComponent';

// Uncomment properties you need
// PaginationComponent.propTypes = {};
// PaginationComponent.defaultProps = {};

export default connect()(PaginationComponent);
