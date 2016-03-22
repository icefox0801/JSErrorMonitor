'use strict';

import React from 'react';

require('styles/error/Main.scss');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-component">
      </div>
    );
  }
}

MainComponent.displayName = 'ErrorMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
