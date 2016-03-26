'use strict';

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import TabsComponent from './common/TabsComponent';

require('styles/error/List.scss');

class ListComponent extends React.Component {
  render() {
    return (
      <div id="error-list">
        <div className="error-list-header container-fluid">
          <h2>错误列表
            <ButtonGroup bsSize="xsmall">
              <Button active bsStyle="danger">未解决</Button>
              <Button>已解决</Button>
              <Button>全部</Button>
            </ButtonGroup>
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
