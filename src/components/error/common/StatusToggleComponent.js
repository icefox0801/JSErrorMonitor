'use strict';

import React from 'react';
import * as statusMap from '../../../constants/statusMap';

require('styles/error/common/StatusToggle.scss');

class StatusToggleComponent extends React.Component {

  handleClick (nextStatus) {
    const { handleUpdate } = this.props;
    handleUpdate(nextStatus);
  }

  render () {
    const { status } = this.props;
    return (
      <a href="javascript:void(0);" className={statusMap.textClassName[status]} onClick={() => this.handleClick(statusMap.next[status])}>{statusMap.operation[status]}</a>
    );
  }
}

StatusToggleComponent.displayName = 'ErrorCommonStatusToggleComponent';

// Uncomment properties you need
// StatusToggleComponent.propTypes = {};
// StatusToggleComponent.defaultProps = {};

export default StatusToggleComponent;
