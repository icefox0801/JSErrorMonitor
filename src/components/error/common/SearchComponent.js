'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Glyphicon } from 'react-bootstrap';

require('styles/error/common/Search.scss');

class SearchComponent extends React.Component {

  handleClick () {
    const { handleSearch } = this.props;

    console.log(this.refs.searchInput);
    const value = this.refs.searchInput.getValue();
    handleSearch(value);
  }

  render() {
    const searchButton = (
      <Button bsStyle="primary" onClick={() => this.handleClick()}><Glyphicon glyph="search" />&nbsp;搜索</Button>
    );
    return (
      <Input type="text" buttonAfter={searchButton} ref="searchInput" />
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
