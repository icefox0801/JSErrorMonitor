'use strict';

import React from 'react';
import TopbarComponent from '../common/TopbarComponent';

require('styles/archive/Main.scss');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="archive-main">
        <TopbarComponent />
        {this.props.children}
      </div>
    );
  }
}

MainComponent.displayName = 'ArchiveMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
