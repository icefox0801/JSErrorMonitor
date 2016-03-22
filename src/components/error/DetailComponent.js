'use strict';

import React from 'react';

require('styles/error/Detail.scss');

class DetailComponent extends React.Component {
  render() {
    return (
      <div className="detail-component">
        Please edit src/components/error//DetailComponent.js to update this component!
      </div>
    );
  }
}

DetailComponent.displayName = 'ErrorDetailComponent';

// Uncomment properties you need
// DetailComponent.propTypes = {};
// DetailComponent.defaultProps = {};

export default DetailComponent;
