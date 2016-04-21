require('normalize.css');
require('styles/App.css');

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SidenavComponent from './common/SidenavComponent';
import FooterComponent from './common/FooterComponent';
import { accountAction, globalAction } from '../actions';
import LoadingComponent from './common/LoadingComponent';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { ready: false, accountReady: false };
  }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(globalAction.getGlobalProps())
      .then(() => {
        this.setState({ ready: true })
      });
    dispatch(accountAction.isAuthenticated())
      .then(() => {
        this.setState({ accountReady: true })
      });
  }

  // prevProps, prevState
  componentDidUpdate (prevProps, prevState) {
    // 深度遍历对象是否相等
    const { dispatch, account } = this.props;
    const { accountReady } = this.state;

    if( _.isEqual(accountReady, prevState.accountReady) && _.isEqual(account.isLogin, prevProps.account.isLogin)) return false;

    if(!account.isLogin) dispatch(push('/login'));

  }

  render() {
    const { ready, accountReady } = this.state;
    const { account } = this.props;
    return ready && accountReady ? (
      <div className="index">
        <SidenavComponent />
        <section className="main">
          {this.props.children}
        </section>
        <FooterComponent />
      </div>
    ) : (
      <LoadingComponent />
    );
  }
}

AppComponent.defaultProps = {
};

function mapStateToProps(state) {
  const { account } = state;
  return { account };
}

export default connect(mapStateToProps)(AppComponent);
