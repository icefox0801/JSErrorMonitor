'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { dateRange } from '../../constants/dropdown';
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
              <NavDropdown title="招聘" id="navDropDown">
                <MenuItem header>选择业务线</MenuItem>
                <MenuItem>全部</MenuItem>
                <MenuItem>房产</MenuItem>
                <MenuItem>招聘</MenuItem>
                <MenuItem>二手</MenuItem>
                <MenuItem>发布</MenuItem>
              </NavDropdown>
              <DropdownComponent type="nav" list={dateRange.list} id="dropdown-date-range" placeholder={dateRange.placeholder} />
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
