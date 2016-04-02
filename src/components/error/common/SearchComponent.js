'use strict';

import React from 'react';
import { Input, Button, Glyphicon } from 'react-bootstrap';

require('styles/error/common/Search.scss');

class SearchComponent extends React.Component {

  handleClick (event) {
    const { handleSearch } = this.props;
    console.log(this.getDOMNode());
    handleSearch(value);
  }

  handleKeyPress (event) {
    const { handleSearch } = this.props;
    handleSearch(event.target.value);
  }

  render() {
    const searchButton = (
      <Button bsStyle="primary" onclick={event => this.handleClick(event)}><Glyphicon glyph="search" />&nbsp;搜索</Button>
    );
    return (
      <Input type="text" buttonAfter={searchButton} onkeypress={event => this.handleKeyPress(event)} />
    );
  }
}

SearchComponent.displayName = 'ErrorCommonSearchComponent';

// Uncomment properties you need
SearchComponent.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
};
// SearchComponent.defaultProps = {};

export default SearchComponent;
