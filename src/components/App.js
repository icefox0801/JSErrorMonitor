require('normalize.css');
require('styles/App.css');

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
      .then((json) => {

        if(!json.account.isLogin) dispatch(push('/login'));

        this.setState({ accountReady: true })
      });
  }

  // prevProps, prevState
  componentDidUpdate (prevProps) {
    const { accountReady } = this.state;
    const { dispatch, account } = this.props;

    if(accountReady && prevProps.account.isLogin && !account.isLogin) {
      dispatch(push('/login'));
    }

  }

  render() {
    const { ready, accountReady } = this.state;
    const { account } = this.props;
    return ready && accountReady ? (
      <div className="index">
        {account.isLogin ? <SidenavComponent /> : ''}
        <section className={account.isLogin ? 'main' : ''}>
          {this.props.children}
        </section>
        {account.isLogin ? <FooterComponent /> : ''}
      </div>
    ) : (
      <LoadingComponent />
    );
  }
}

AppComponent.defaultProps = {
  account: {
    isLogin: false,
    username: ''
  }
};

function mapStateToProps(state) {
  const { account } = state;
  return { account };
}

export default connect(mapStateToProps)(AppComponent);
