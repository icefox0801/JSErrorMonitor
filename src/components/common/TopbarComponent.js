'use strict';

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { timeRange, business } from '../../constants/dropdown';
import DropdownComponent from './DropdownComponent';
import { globalAction } from '../../actions';

require('styles/common/Topbar.scss');

class TopbarComponent extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(globalAction.getGlobalProps());
  }

  handleSelect (key, value) {
    const { dispatch, params } = this.props;
    _.set(params, 'page', 1);
    dispatch(globalAction.setGlobalProps(key, value))
  }

  render() {
    const { global } = this.props;

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
              <NavItem active={global.platform === 'pc'} key="pc" onClick={() => this.handleSelect('platform', 'pc')}>PC端</NavItem>
              <NavItem active={global.platform === 'm'} key="m" onSelect={() => this.handleSelect('platform', 'm')}>M端</NavItem>
              <NavItem active={global.platform === 'app'} key="app" onSelect={() => this.handleSelect('platform', 'app')}>App</NavItem>
              <DropdownComponent type="nav" list={business.list} id="dropdown-business" placeholder={business.placeholder} selectKey={global.business} handleSelect={key => this.handleSelect('business', key)} />
              <DropdownComponent type="nav" list={timeRange.list} id="dropdown-time-range" placeholder={timeRange.placeholder} selectKey={global.timeRange} handleSelect={key => this.handleSelect('timeRange', key)}/>
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
TopbarComponent.defaultProps = {
  global: {
    timeRange: 24,
    business: 'all',
    platform: 'pc'
  }
};

function mapStateToProps(state) {
  const { global, params } = state;
  return { global, params };
}

export default connect(mapStateToProps)(TopbarComponent);
