'use strict';

import React from 'react';
import { Collapse, Glyphicon } from 'react-bootstrap';

require('styles/error/detail/Info.scss');

class InfoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var self = this;
    return (
      <div className="error-detail-info">
        {!self.state.open && (<a href="javascript:void(0);" onClick={ ()=> self.setState({ open: !self.state.open }) }>展开详细信息</a>)}
        <Collapse in={self.state.open}>
          <div>
            <dl>
              <dt>浏览器：</dt>
              <dd>{this.props.info.browser}</dd>
            </dl>
            <dl>
              <dt>操作系统：</dt>
              <dd>{this.props.info.system}</dd>
            </dl>
            <dl>
              <dt>错误堆栈：</dt>
              <dd>
                <div className="bg-warning error-detail-stack">
                  <p className="text-danger">Error: A error occurred!</p>
                  <p className="text-danger">
                    <Glyphicon glyph="console"/>
                    <span>at HTMLBodyElement.document.body.onclick (&lt;anonymous&gt;:2:61)</span>
                  </p>
                  <p className="text-danger">
                    <Glyphicon glyph="console"/>
                    <span>at HTMLBodyElement.document.body.onclick (&lt;anonymous&gt;:2:61)</span></p>
                </div>
              </dd>
            </dl>
            <a href="javascript:void(0);" onClick={ ()=> self.setState({ open: !self.state.open }) }>收起详细信息</a>
          </div>
        </Collapse>
      </div>
    );
  }
}

InfoComponent.displayName = 'ErrorDetailInfoComponent';

// Uncomment properties you need
// InfoComponent.propTypes = {};
// InfoComponent.defaultProps = {};

export default InfoComponent;
