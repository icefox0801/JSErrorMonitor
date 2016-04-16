'use strict';

import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

require('styles/archive/common/StatusDropdown.scss');

class StatusDropdownComponent extends React.Component {

  handleSelect (event, key) {
    const { handleSelect } = this.props;
    handleSelect(key);
  }

  render() {
    const { status } = this.props;
    return (
      <DropdownButton bsSize="xsmall" bsStyle={status === 'open' ? 'danger': 'success'} title={status === 'open' ? '未解决': '已解决'} id="dropdown-detail-status" onSelect={(e, k) => this.handleSelect(e, k)}>
        <MenuItem header>请选择操作：</MenuItem>
        <MenuItem eventKey="open">打开</MenuItem>
        <MenuItem eventKey="closed">关闭</MenuItem>
      </DropdownButton>
    );
  }
}

StatusDropdownComponent.displayName = 'ArchiveCommonStatusDropdownComponent';

// Uncomment properties you need
StatusDropdownComponent.propTypes = {
  handleSelect: React.PropTypes.func.isRequired
};
// StatusDropdownComponent.defaultProps = {};

export default StatusDropdownComponent;
