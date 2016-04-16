/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import StatusDropdownComponent from 'components/archive/common/StatusDropdownComponent.js';

describe('StatusDropdownComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(StatusDropdownComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('statusdropdown-component');
  });
});
