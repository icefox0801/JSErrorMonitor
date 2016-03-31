'use strict';

import React from 'react';
import TopbarComponent from '../common/TopbarComponent';

require('styles/error/Main.scss');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="error-main">
        <TopbarComponent />
        {this.props.children}
      </div>
    );
  }
}

MainComponent.displayName = 'ErrorMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
