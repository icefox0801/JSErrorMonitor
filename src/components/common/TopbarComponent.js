'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
              <NavDropdown title="最近7天的错误日志" id="navDropDown">
                <MenuItem header>选择时间范围</MenuItem>
                <MenuItem>1小时</MenuItem>
                <MenuItem>24小时</MenuItem>
                <MenuItem>7天</MenuItem>
                <MenuItem>1个月</MenuItem>
                <MenuItem>1年</MenuItem>
              </NavDropdown>
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
