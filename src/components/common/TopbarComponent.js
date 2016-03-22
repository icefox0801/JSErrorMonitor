'use strict';

import React from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

require('styles/common/Topbar.scss');

class TopbarComponent extends React.Component {
  render() {
    return (
      <nav className="topbar">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">PWS</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <span>最近7天的错误日志</span>
                <span className="caret" />
              </NavItem>
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
