'use strict';

import React from 'react';

require('styles/error/List.scss');

class ListComponent extends React.Component {
  render() {
    return (
      <div className="list-component">
        Please edit src/components/error//ListComponent.js to update this component!
      </div>
    );
  }
}

ListComponent.displayName = 'ErrorListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
