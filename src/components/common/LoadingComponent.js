'use strict';

import React from 'react';
import Loading from 'react-loading';

require('styles/common/Loading.scss');

class LoadingComponent extends React.Component {
  render() {
    const { width, height, type, color, iconHeight, iconWidth } = this.props;
    const style = { width, height };
    return (
      <div style={style} className="loading-wrapper">
        <div className="loading-container">
          <Loading type={type} color={color} height={iconHeight} width={iconWidth} className="loading" />
        </div>
      </div>
    );
  }
}

LoadingComponent.displayName = 'CommonLoadingComponent';

// Uncomment properties you need
// LoadingComponent.propTypes = {};
LoadingComponent.defaultProps = {
  type: 'spin',
  color: '#1a8cff',
  width: '100%',
  height: '200px',
  iconHeight: 32,
  iconWidth: 32
};

export default LoadingComponent;
