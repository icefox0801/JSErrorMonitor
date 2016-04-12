'use strict';

import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

require('styles/chart/common/Tabs.scss');

class TabsComponent extends React.Component {
  render() {
    return (
      <nav id="chart-common-tabs">
        <Nav bsStyle="tabs">
          <LinkContainer to="/chart/trend">
            <NavItem>
              <span className="tabs-title">错误趋势</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/chart/category">
            <NavItem>
              <span className="tabs-title">错误分类</span>
            </NavItem>
          </LinkContainer>
        </Nav>
      </nav>
    );
  }
}

TabsComponent.displayName = 'ChartCommonTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;
