'use strict';

import React from 'react';
import { Nav, NavItem, Glyphicon, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

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
        <Nav bgStyle="stacked" activeKey={this.state.key} onSelect={this.handleSelect}>
          <LinkContainer to="/home" eventKey={1}>
            <NavItem><Glyphicon glyph="home" /><span>首页</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/error" eventKey={2}>
            <NavItem><Glyphicon glyph="info-sign" /><span>错误</span></NavItem>
          </LinkContainer>
          <LinkContainer to="/charts" eventKey={3}>
            <NavItem><Glyphicon glyph="signal" />图表</NavItem>
          </LinkContainer>
          <LinkContainer to="/statistics">
            <NavItem eventKey={4}><Glyphicon glyph="th-list" />统计</NavItem>
          </LinkContainer>
          <LinkContainer to="/extras">
            <NavItem eventKey={5}><Glyphicon glyph="star" />其他</NavItem>
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
