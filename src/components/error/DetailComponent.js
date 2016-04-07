'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon, Label, Button } from 'react-bootstrap'
import ListComponent from './detail/ListComponent'
import { infoAction } from '../../actions';
import * as iconType from '../../constants/iconType';

require('styles/error/Detail.scss');

class DetailComponent extends React.Component {

  componentDidMount () {
    const { dispatch, routeParams } = this.props;
    dispatch(infoAction.fetchErrorDetail(routeParams.archiveId));
  }

  render() {
    const { abstract, list } = this.props.info;
    return (
      <div id="error-detail">
        <div className="error-detail-header container-fluid">
          <h4>
            <span className="error-detail-status"><Label bsStyle={abstract.status === 'open' ? 'danger': 'success'}>{abstract.status === 'open' ? '未解决': '已解决'}</Label>#254：</span>
            <span className={abstract.status === 'open' ? 'text-warning': 'text-muted'}>{abstract.message}</span>
          </h4>
          <p className="text-muted">
            <Glyphicon glyph="eye-open" /><span className="error-detail-meta">共计：{abstract.count}次</span>
            <Glyphicon glyph="time" /><span className="error-detail-meta">最近：{abstract.latest}</span>
            <Glyphicon glyph="time" /><span className="error-detail-meta">最早：{abstract.earliest}</span>
          </p>
        </div>
        <div className="container-fluid">
          <div className="error-detail-tags">
            <dl>
              <dt><span className="text-info">浏览器：</span></dt>
              <dd>
                <ul className="error-detail-browsers">
                  <li>
                    {abstract.browsers.map(browser => (
                      <a href="javascript:void(0);">
                        <img src={'/images/browser_nice_icon_' + iconType.browser[browser] + '.png'} alt="IE" width="24" height="24"/>
                      </a>
                    ))}
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt><span className="text-warning">操作系统：</span></dt>
              <dd>
                {abstract.os.map((system, idx) => (
                  <Label bsStyle="warning" key={idx}>{system}</Label>
                ))}
              </dd>
            </dl>
          </div>
        </div>
        <hr/>
        <ListComponent list={list} />
        <Button bsStyle="primary" bsSize="large" className="center-block">加载更多</Button>
      </div>
    );
  }
}

DetailComponent.displayName = 'ErrorDetailComponent';

// Uncomment properties you need
// DetailComponent.propTypes = {};
DetailComponent.defaultProps = {
  info: {
    abstract: {
      browsers: [],
      os: []
    },
    list: []
  }
};

function mapStateToProps(state) {
  const { info, params } = state;
  return { info, params }
}

export default connect(mapStateToProps)(DetailComponent);
