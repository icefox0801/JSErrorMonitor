'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Pagination } from 'react-bootstrap';

require('styles/common/Pagination.scss');

class PaginationComponent extends React.Component {

  pageTo (e, o) {
    const { dispatch, params, linkPrefix } = this.props;
    dispatch(push(linkPrefix + o.eventKey));
  }

  render() {

    const { total, page } = this.props;

    return (
      <Pagination className="pull-right" prev next first last ellipsis boundaryLinks items={total} maxButtons={5} activePage={parseInt(page, 10)} onSelect={(e, o) => this.pageTo(e, o)}/>
    );
  }
}

PaginationComponent.displayName = 'CommonPaginationComponent';

// Uncomment properties you need
// PaginationComponent.propTypes = {};
// PaginationComponent.defaultProps = {};

export default connect()(PaginationComponent);
