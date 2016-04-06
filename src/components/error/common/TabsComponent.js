'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

require('styles/error/common/Tabs.scss');

class TabsComponent extends React.Component {
  render() {
    const { jsError } = this.props;
    return (
      <nav id="error-common-tabs">
        <Nav bsStyle="tabs">
          <LinkContainer to="/error/list/all">
            <NavItem>
              <span className="tabs-title">全部</span>
              <span className="badge">{jsError.all.meta.count || 0}</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/error/list/archive">
            <NavItem>
              <span className="tabs-title">归档</span>
              <span className="badge">{jsError.archives.meta.count || 0}</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/error/list/page">
            <NavItem>
              <span className="tabs-title">页面</span>
              <span className="badge">30</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/error/list/browser">
            <NavItem>
              <span className="tabs-title">浏览器</span>
              <span className="badge">{jsError.browsers.meta.count || 0}</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/error/list/os">
            <NavItem>
              <span className="tabs-title">操作系统</span>
              <span className="badge">{jsError.os.meta.count || 0}</span>
            </NavItem>
          </LinkContainer>
        </Nav>
      </nav>
    );
  }
}

TabsComponent.displayName = 'ErrorCommonTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

function mapStateToProps(state) {
  const { jsError } = state;
  return { jsError }
}

export default connect(mapStateToProps)(TabsComponent);
