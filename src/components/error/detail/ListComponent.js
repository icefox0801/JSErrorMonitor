'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';
import InfoComponent from './InfoComponent';
import * as iconType from '../../../constants/iconType';

require('styles/error/detail/List.scss');

class ListComponent extends React.Component {
  render() {
    return (
      <div id="error-detail-list" className="container-fluid">
        {this.props.list.map(function (jsError) {
          let header = (
            <div>
              <div className="media">
                <div className="media-left">
                  <img className="media-object" src={`/images/browser_nice_icon_${iconType.browser[jsError.browser.family]}.png`} alt={jsError.browser.family} title={jsError.browser.family} width="64" height="64" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{jsError.message}<small className="pull-right">{jsError.date}</small></h4>
                  <p>
                    <a href={jsError.url} target="_blank">{jsError.url}</a>
                    <br />
                    <span className="text-muted">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36</span>
                  </p>
                </div>
              </div>
            </div>
          );
          return (
            <Panel header={header}  key={jsError._id}>
              <InfoComponent jsError={jsError} />
            </Panel>
          );
        })}
      </div>
    );
  }
}

ListComponent.displayName = 'ErrorDetailListComponent';

// Uncomment properties you need
ListComponent.propTypes = {
  list: React.PropTypes.array.isRequired
};
// ListComponent.defaultProps = {};

export default ListComponent;
