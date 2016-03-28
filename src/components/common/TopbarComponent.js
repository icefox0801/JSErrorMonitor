'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { timeRange, business } from '../../constants/dropdown';
import DropdownComponent from './DropdownComponent';

require('styles/common/Topbar.scss');

class TopbarComponent extends React.Component {
  render() {
    return (
      <nav id="topbar">
        <Navbar inverse fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">PWS</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem active>PC端</NavItem>
              <NavItem>M端</NavItem>
              <NavItem>App</NavItem>
              <DropdownComponent type="nav" list={business.list} id="dropdown-business" placeholder={business.placeholder} />
              <DropdownComponent type="nav" list={timeRange.list} id="dropdown-time-range" placeholder={timeRange.placeholder} />
            </Nav>
            <Nav pullRight>
              <NavDropdown title="用户" id="navDropDown">
                <MenuItem>登录</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}

TopbarComponent.displayName = 'CommonTopbarComponent';

// Uncomment properties you need
// TopbarComponent.propTypes = {};
// TopbarComponent.defaultProps = {};

export default TopbarComponent;
