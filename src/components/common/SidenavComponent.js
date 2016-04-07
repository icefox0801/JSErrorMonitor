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
      <aside className="sidebar">
        <Nav bgStyle="stacked">
          <LinkContainer to="/home">
            <NavItem><Glyphicon glyph="home" /><span>首页</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/error">
            <NavItem><Glyphicon glyph="info-sign" /><span>错误</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/live">
            <NavItem><Glyphicon glyph="time" />实时</NavItem>
          </LinkContainer>
          <LinkContainer to="/chart">
            <NavItem><Glyphicon glyph="signal" />图表</NavItem>
          </LinkContainer>
          <LinkContainer to="/filter">
            <NavItem><Glyphicon glyph="glass" />过滤</NavItem>
          </LinkContainer>
          <LinkContainer to="/extra">
            <NavItem><Glyphicon glyph="star" />其他</NavItem>
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
