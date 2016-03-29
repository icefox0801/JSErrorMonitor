'use strict';

import React from 'react';
import { NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap';

require('styles/common/Dropdown.scss');

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);

    var key = -1;
    var text = props.placeholder;

    if(props.required) {
      key = props.list[0].key;
      text = props.list[0].value;
    }

    if(props.activeKey) {
      var obj = props.list.filter(item => item.key == props.activeKey)[0];

      if(obj) {
        key = obj.key;
        text = obj.value;
      }

    }

    this.state = {
      text,
      key
    };
  }

  handleSelect (event, key) {
    const text = this.props.list.filter(item => item.key == key)[0].value;
    this.setState({
      key,
      text
    });
  }

  render() {
    const { list, type, placeholder } = this.props;

    if(type === 'nav') {
      return (
        <NavDropdown title={this.state.text} onSelect={(e, k) => this.handleSelect(e, k)} activeKey={this.state.key} id={this.props.id}>
          <MenuItem header>{placeholder}：</MenuItem>
          {list.map(item => (<MenuItem eventKey={item.key} key={item.key}>{item.value}</MenuItem>))}
        </NavDropdown>
      );
    } else {
      return (
        <DropdownButton title={this.state.text} onSelect={(e, k) => this.handleSelect(e, k)} activeKey={this.state.key} id={this.props.id}>
          <MenuItem header>{placeholder}：</MenuItem>
          {list.map(item => (<MenuItem eventKey={item.key} key={item.key}>{item.value}</MenuItem>))}
        </DropdownButton>
      );
    }

  }
}

DropdownComponent.displayName = 'CommonDropdownComponent';

// Uncomment properties you need
DropdownComponent.propTypes = {
  list: React.PropTypes.array.isRequired,
  type: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  placeholder: React.PropTypes.string
};

DropdownComponent.defaultProps = {
  type: 'button',
  list: [],
  title: '',
  placeholder: '',
  required: true,
  activeKey: '',
  linkTo: ''
};

export default DropdownComponent;
