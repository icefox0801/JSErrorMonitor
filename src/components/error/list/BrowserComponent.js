'use strict';

import React from 'react';

require('styles/error/list/Browser.scss');

class BrowserComponent extends React.Component {
  render() {
    return (
      <div className="browser-component">
        Please edit src/components/error/list//BrowserComponent.js to update this component!
      </div>
    );
  }
}

BrowserComponent.displayName = 'ErrorListBrowserComponent';

// Uncomment properties you need
// BrowserComponent.propTypes = {};
// BrowserComponent.defaultProps = {};

export default BrowserComponent;
