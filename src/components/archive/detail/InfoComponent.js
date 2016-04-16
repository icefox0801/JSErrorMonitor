'use strict';

import React from 'react';
import { Collapse, Glyphicon } from 'react-bootstrap';

require('styles/archive/detail/Info.scss');

class InfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { jsError } = this.props;
    return (
      <div className="archive-detail-info">
        {!this.state.open && (<a href="javascript:void(0);" onClick={ ()=> this.setState({ open: !this.state.open }) }>展开详细信息</a>)}
        <Collapse in={this.state.open}>
          <div>
            <dl>
              <dt>浏览器：</dt>
              <dd>{jsError.browser.family}</dd>
            </dl>
            <dl>
              <dt>操作系统：</dt>
              <dd>{jsError.os.family}</dd>
            </dl>
            <dl>
              <dt>错误堆栈：</dt>
              <dd>
                <div className="bg-warning error-detail-stack">
                  <p className="text-danger">{jsError.message}</p>
                  {jsError.stack.map(stackLine => (
                    <p className="text-danger">
                      <Glyphicon glyph="console"/>
                      <span>
                        <span>at {stackLine.method} </span>
                        <span>(</span>
                        <a href={stackLine.location}>{stackLine.location}</a>
                        <span>:{stackLine.line}:{stackLine.column}</span>
                        <span>)</span>
                      </span>
                    </p>
                  ))}
                </div>
              </dd>
            </dl>
            <a href="javascript:void(0);" onClick={ ()=> this.setState({ open: !this.state.open }) }>收起详细信息</a>
          </div>
        </Collapse>
      </div>
    );
  }
}

InfoComponent.displayName = 'ArchiveDetailInfoComponent';

// Uncomment properties you need
// InfoComponent.propTypes = {};
InfoComponent.defaultProps = {
  jsError: {
    stack: []
  }
};

export default InfoComponent;
