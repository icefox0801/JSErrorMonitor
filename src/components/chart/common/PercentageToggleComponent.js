'use strict';

import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

require('styles/chart/common/PercentageToggle.scss');

class PercentageToggleComponent extends React.Component {
  constructor (props) {
    super(props);
    const active = props.active || 'percentage';
    this.state = { active };
  }

  handleSelect (value) {
    const { handleChange } = this.props;
    this.setState({
      active: value
    });
    handleChange(value);
  }

  render() {
    const statusList = [{
      key: 'percentage',
      value: '百分比',
      bsStyle: 'primary'
    }, {
      key: 'number',
      value: '数量',
      bsStyle: 'primary'
    }];
    const { className } = this.props;
    return (
      <ButtonGroup bsSize="xsmall" className={className}>
        {statusList.map(item => (<Button active={this.state.active === item.key} key={item.key} bsStyle={this.state.active === item.key ? item.bsStyle : 'default'} onClick={() => this.handleSelect(item.key)}>{item.value}</Button>))}
      </ButtonGroup>
    );
  }
}

PercentageToggleComponent.displayName = 'ChartCommonPercentageToggleComponent';

// Uncomment properties you need
// PercentageToggleComponent.propTypes = {};
// PercentageToggleComponent.defaultProps = {};

export default PercentageToggleComponent;
