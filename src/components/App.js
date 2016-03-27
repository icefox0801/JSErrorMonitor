require('normalize.css');
require('styles/App.css');

import React from 'react';
import { connect } from 'react-redux';
import SidenavComponent from './common/SidenavComponent';
import TopbarComponent from './common/TopbarComponent';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <SidenavComponent />
        <section className="main">
          <TopbarComponent />
          {this.props.children}
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default connect()(AppComponent);
