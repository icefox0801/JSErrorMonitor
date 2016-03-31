'use strict';

import React from 'react';
import TabsComponent from './common/TabsComponent';
import StatusToggleComponent from './common/StatusToggleComponent';

require('styles/error/List.scss');

class ListComponent extends React.Component {

  render() {
    return (
      <div id="error-list">
        <div className="error-list-header container-fluid">
          <h2>错误列表
            <StatusToggleComponent />
          </h2>
        </div>
        <TabsComponent />
        {this.props.children}
      </div>
    );
  }
}

ListComponent.displayName = 'ErrorListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
