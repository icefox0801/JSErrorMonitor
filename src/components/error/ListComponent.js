'use strict';

import React from 'react';
import TabsComponent from './common/TabsComponent';

require('styles/error/List.scss');

class ListComponent extends React.Component {
  render() {
    return (
      <div id="error-list">
        <h2 className="container-fluid">错误列表</h2>
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
