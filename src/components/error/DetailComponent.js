'use strict';

import React from 'react';
import { Glyphicon, Label, Button } from 'react-bootstrap'
import ListComponent from './detail/ListComponent'

require('styles/error/Detail.scss');

class DetailComponent extends React.Component {
  render() {
    return (
      <div id="error-detail">
        <div className="error-detail-header container-fluid">
          <h4>
            <span className="error-detail-status"><Label bsStyle="danger">未解决</Label>#254：</span>
            <span className="text-warning">对象不支持此属性或方法</span>
          </h4>
          <p className="text-muted">
            <Glyphicon glyph="eye-open" /><span className="error-detail-meta">共计：31次</span>
            <Glyphicon glyph="time" /><span className="error-detail-meta">最近：12分钟前</span>
            <Glyphicon glyph="time" /><span className="error-detail-meta">最早：5天前</span>
          </p>
        </div>
        <div className="container-fluid">
          <div className="error-detail-tags">
            <dl>
              <dt><span className="text-info">浏览器：</span></dt>
              <dd>
                <ul className="error-detail-browsers">
                  <li>
                    <a href="#">
                      <img src="/images/browser_nice_icon_07.png" alt="IE" width="24" height="24" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/browser_nice_icon_01.png" alt="IE" width="24" height="24" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/browser_nice_icon_06.png" alt="IE" width="24" height="24" />
                    </a>
                  </li>
                </ul>

              </dd>
            </dl>
            <dl>
              <dt><span className="text-warning">操作系统：</span></dt>
              <dd>
                <Label bsStyle="warning">Windows 7</Label>
                <Label bsStyle="warning">Windows XP</Label>
              </dd>
            </dl>
          </div>
        </div>
        <hr/>
        <ListComponent />
        <Button bsStyle="primary" bsSize="large" className="center-block">加载更多</Button>
      </div>
    );
  }
}

DetailComponent.displayName = 'ErrorDetailComponent';

// Uncomment properties you need
// DetailComponent.propTypes = {};
// DetailComponent.defaultProps = {};

export default DetailComponent;
