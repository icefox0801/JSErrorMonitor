'use strict';

import React from 'react';
import _ from 'lodash';

require('styles/error/common/Range.scss');

class RangeComponent extends React.Component {
  render() {
    const { current, pageSize, count } = this.props.meta;
    const startIndex = (current - 1) * pageSize + 1;
    const endIndex = _.min([startIndex + pageSize - 1, count]);

    if(count == 0) return (
      <small />
    );

    return (
      startIndex === endIndex ?
      <small className="text-muted">&nbsp;#{startIndex}</small> :
      <small className="text-muted">&nbsp;#{startIndex} ~ #{endIndex}</small>
    );
  }
}

RangeComponent.displayName = 'ErrorCommonRangeComponent';

// Uncomment properties you need
RangeComponent.propTypes = {
  meta: React.PropTypes.object.isRequired
};
// RangeComponent.defaultProps = {};

export default RangeComponent;
