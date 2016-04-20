'use strict';

import React from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

require('styles/common/Sidenav.scss');

class SidenavComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      key: 1
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    return (
      <aside className="hidden-xs" id="sidebar">
        <Nav bgStyle="stacked">
          <LinkContainer to="/home">
            <NavItem><Glyphicon glyph="home" /><span className="menu-text">首页</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/error">
            <NavItem><Glyphicon glyph="info-sign" /><span className="menu-text">错误</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/live">
            <NavItem><Glyphicon glyph="time" /><span className="menu-text">实时</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/chart">
            <NavItem><Glyphicon glyph="signal" /><span className="menu-text">图表</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/filter">
            <NavItem><Glyphicon glyph="glass" /><span className="menu-text">过滤</span></NavItem>
          </LinkContainer>
        </Nav>
      </aside>
    );
  }
}

SidenavComponent.displayName = 'CommonSidenavComponent';

// Uncomment properties you need
// SidenavComponent.propTypes = {};
// SidenavComponent.defaultProps = {};

export default SidenavComponent;
