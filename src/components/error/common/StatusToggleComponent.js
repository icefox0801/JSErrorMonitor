'use strict';

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';

import { statusAction } from '../../../actions';

require('styles/error/common/StatusToggle.scss');

class StatusToggleComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { active: props.status };
  }

  handleSelect (value) {
    const { dispatch, params } = this.props;
    this.setState({
      active: value
    });
    _.set(params, 'page', 1);
    dispatch(statusAction.setStatus(value))
  }

  render() {
    const statusList = [{
      key: 'open',
      value: '未解决',
      bsStyle: 'danger'
    }, {
      key: 'closed',
      value: '已解决',
      bsStyle: 'success'
    }, {
      key: 'all',
      value: '全部',
      bsStyle: 'primary'
    }];
    return (
      <ButtonGroup bsSize="xsmall">
        {statusList.map(item => (<Button active={this.state.active === item.key} key={item.key} bsStyle={this.state.active === item.key ? item.bsStyle : 'default'} onClick={() => this.handleSelect(item.key)}>{item.value}</Button>))}
      </ButtonGroup>
    );
  }
}

StatusToggleComponent.displayName = 'ErrorCommonStatusToggleComponent';

// Uncomment properties you need
// StatusToggleComponent.propTypes = {};
StatusToggleComponent.defaultProps = {
  status: 'open'
};


function mapStateToProps (state) {
  const { status, params } = state;
  return { status, params }
}

export default connect(mapStateToProps)(StatusToggleComponent);
