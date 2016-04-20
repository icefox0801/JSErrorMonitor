require('normalize.css');
require('styles/App.css');

import React from 'react';
import { connect } from 'react-redux';
import SidenavComponent from './common/SidenavComponent';
import FooterComponent from './common/FooterComponent';
import { globalAction } from '../actions';
import LoadingComponent from './common/LoadingComponent';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(globalAction.getGlobalProps())
      .then(() => {
        this.setState({ ready: true })
      });
  }

  render() {
    const { ready } = this.state;
    return ready ? (
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

export default connect()(AppComponent);
