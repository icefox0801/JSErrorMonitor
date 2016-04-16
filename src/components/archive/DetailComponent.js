'use strict';

import nprogress from 'nprogress';
import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon, Label, Button } from 'react-bootstrap'

import { infoAction } from '../../actions';
import * as iconType from '../../constants/iconType';

import LoadingComponent from '../common/LoadingComponent';
import ListComponent from './detail/ListComponent';
import StatusDropdownComponent from './common/StatusDropdownComponent';

require('styles/archive/Detail.scss');

class DetailComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { loading: true };
  }
  // nextProps
  componentWillReceiveProps () {
    this.setState({ loading: false });
  }

  componentDidMount () {
    const { dispatch, routeParams } = this.props;
    nprogress.start();
    dispatch(infoAction.fetchArchiveDetail(routeParams.archiveId)).then(() => { nprogress.done(); });
  }

  updateStatus (status) {
    const { dispatch, routeParams } = this.props;
    nprogress.start();
    dispatch(infoAction.updateArchiveStatus(routeParams.archiveId, status)).then(() => { nprogress.done(); });
  }

  loadMore () {
    const { dispatch, routeParams, info } = this.props;
    const skip = info.list.length;
    nprogress.start();
    dispatch(infoAction.fetchArchiveDetailMore(routeParams.archiveId, skip)).then( () => { nprogress.done(); });
  }

  render() {
    const { abstract, list } = this.props.info;
    const { loading } = this.state;
    return loading ? <LoadingComponent type="bars" /> :
      <div id="archive-detail">
        <div className="archive-detail-header container-fluid">
          <h4>
            <span className="archive-detail-status">
              <StatusDropdownComponent status={abstract.status} handleSelect={status => this.updateStatus(status)} />
              <span>#{abstract.orderId}：</span></span>
            <span className={abstract.status === 'open' ? 'text-warning': 'text-muted'}>{abstract.message}</span>
          </h4>
          <p className="text-muted">
            <Glyphicon glyph="eye-open" /><span className="archive-detail-meta">共计：{abstract.count}次</span>
            <Glyphicon glyph="time" /><span className="archive-detail-meta">最近：{abstract.latest}</span>
            <Glyphicon glyph="time" /><span className="archive-detail-meta">最早：{abstract.earliest}</span>
          </p>
        </div>
        <div className="container-fluid">
          <div className="archive-detail-tags">
            <dl>
              <dt><span className="text-info">浏览器：</span></dt>
              <dd>
                <ul className="archive-detail-browsers">
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
        <Button bsStyle="primary" bsSize="large" className="center-block" onClick={() => this.loadMore()}>加载更多</Button>
      </div>
  }
}

DetailComponent.displayName = 'ArchiveDetailComponent';

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
