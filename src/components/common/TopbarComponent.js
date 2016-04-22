'use strict';

import _ from 'lodash';
import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import nprogress from 'nprogress';
import { timeRange, business } from '../../constants/dropdown';
import DropdownComponent from './DropdownComponent';
import { accountAction, globalAction } from '../../actions';

require('styles/common/Topbar.scss');

class TopbarComponent extends React.Component {

  handleSelect (key, value) {
    const { dispatch, params } = this.props;
    _.set(params, 'page', 1);
    dispatch(globalAction.setGlobalProps(key, value))
  }

  goToLogin() {
    const { dispatch } = this.props;
    dispatch(push('/login'));
  }

  logout () {
    const { dispatch } = this.props;
    nprogress.start();
    dispatch(accountAction.doLogoutAccount()).then(() => { nprogress.done(); });
  }

  render() {
    const { global, account } = this.props;

    return (
      <nav id="topbar">
        <Navbar inverse fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home">页面错误监控平台</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem active={global.platform === 'PC'} key="pc" onClick={() => this.handleSelect('platform', 'PC')}>PC端</NavItem>
              <NavItem active={global.platform === 'M'} key="m" onSelect={() => this.handleSelect('platform', 'M')}>M端</NavItem>
              <NavItem active={global.platform === 'APP'} key="app" onSelect={() => this.handleSelect('platform', 'APP')}>App</NavItem>
              <DropdownComponent type="nav" list={business.list} id="dropdown-business" placeholder={business.placeholder} selectKey={global.business} handleSelect={key => this.handleSelect('business', key)} />
              <DropdownComponent type="nav" list={timeRange.list} id="dropdown-time-range" placeholder={timeRange.placeholder} selectKey={global.timeRange} handleSelect={key => this.handleSelect('timeRange', key)}/>
            </Nav>
            <Nav pullRight>
              <NavDropdown title={account.username || '用户'} id="navDropDown">
                {account.isLogin ? <MenuItem onClick={() => this.logout()}><Glyphicon glyph="log-out"/>&nbsp;登出</MenuItem> :
                  <MenuItem onClick={() => this.goToLogin()}><Glyphicon glyph="log-in"/>&nbsp;登录</MenuItem>}
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
    platform: 'PC'
  }
};

function mapStateToProps(state) {
  const { global, params, account } = state;
  return { global, params, account };
}

export default connect(mapStateToProps)(TopbarComponent);
