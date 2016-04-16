'use strict';

import React from 'react';

require('styles/error/common/StatusToggle.scss');

class StatusToggleComponent extends React.Component {

  handleClick (nextStatus) {
    const { handleUpdate } = this.props;
    handleUpdate(nextStatus);
  }

  render () {
    const { status, handleClick } = this.props;
    const text = (status === 'open' ? '关闭' : '打开');
    const className = (status === 'open' ? 'text-primary' : 'text-muted');
    const nextStatus = (status === 'open' ? 'closed' : 'open');
    return (
      <a href="javascript:void(0);" className={className} onClick={() => this.handleClick(nextStatus)}>{text}</a>
    );
  }
}

StatusToggleComponent.displayName = 'ErrorCommonStatusToggleComponent';

// Uncomment properties you need
// StatusToggleComponent.propTypes = {};
// StatusToggleComponent.defaultProps = {};

export default StatusToggleComponent;
