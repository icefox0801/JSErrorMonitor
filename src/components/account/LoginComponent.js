'use strict';

import _ from 'lodash';
import React from 'react';
import nprogress from 'nprogress';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Panel, Grid, Row, Col, Input, Button, Alert } from 'react-bootstrap';

import { accountAction } from '../../actions';

require('styles/account/Login.scss');

class LoginComponent extends React.Component {

  componentDidMount () {
    const { dispatch, account } = this.props;

    if(account.isLogin) dispatch(push('/'));
  }
  // prevProps, prevState
  componentDidUpdate () {
    // 深度遍历对象是否相等
    const { dispatch, account } = this.props;

    if(account.isLogin) dispatch(push('/'));

  }

  login () {
    const username = this.refs['username'].getValue();
    const password = this.refs['password'].getValue();
    const { dispatch } = this.props;

    if(!this.validate(username, password)) {
      this.forceUpdate();
      return false;
    }

    nprogress.start();
    dispatch(accountAction.doLoginAccount({ username, password })).then(() => { nprogress.done() });
  }

  validate (username, password) {
    const { account } = this.props;

    if(!username) {
      _.set(account, 'errMsg', 'username is required!');
      return false;
    }

    if(!password) {
      _.set(account, 'errMsg', 'password is required!');
      return false;
    }

    if(!/^[\w]{5,20}$/.exec(username)) {
      _.set(account, 'errMsg', 'username is invalid!');
      return false;
    }

    if(!/^[\S]{5,20}$/.exec(username)) {
      _.set(account, 'errMsg', 'password is invalid!');
      return false;
    }

    return true;
  }

  render () {
    const { account } = this.props;
    return (
      <Grid fluid id="login">
        <Row>
          <Col smOffset={4} sm={4} xs={12}>
            <Panel header={'用户登录'}>
              <form className="container-fluid">
                <Input type="text" name="username" label="用户名：" ref="username" validationState={'error'} />
                <Input type="password" name="password" label="密码：" ref="password" />
                {account.errMsg ? <Alert bsStyle="danger">{account.errMsg}</Alert> : ''}
                <Button bsSize="large" bsStyle="primary" block onClick={() => this.login()}>登录</Button>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

LoginComponent.displayName = 'AccountLoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
LoginComponent.defaultProps = {
  account: {
    username: '',
    isLogin: false,
    errMsg: ''
  }
};

function mapStateToProps(state) {
  const { account } = state;
  return { account }
}

export default connect(mapStateToProps)(LoginComponent);
