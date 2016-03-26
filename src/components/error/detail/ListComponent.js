'use strict';

import React from 'react';
import { Panel } from 'react-bootstrap';
import InfoComponent from './InfoComponent';

require('styles/error/detail/List.scss');

class ListComponent extends React.Component {
  render() {
    const results = [
      {
        id: 'e12ea5d71d',
        name: '对象不支持此属性或方法',
        date: '2016-03-22 16:26:09',
        url: 'http://bj.58.com/zptaobao/?PGTID=0d100000-0000-1128-816e-1e8d49ca2ea8&ClickID=1',
        browserFlag: 1,
        browser: 'Chrome 49.0.2623.87',
        system: 'Windows XP'
      },
      {
        id: 'e12ea5d71e',
        name: '对象不支持此属性或方法',
        date: '2016-03-22 16:26:09',
        url: 'http://bj.58.com/zptaobao/?PGTID=0d100000-0000-1128-816e-1e8d49ca2ea8&ClickID=1',
        browserFlag: 6,
        browser: 'Mozilla Firefox 42.0',
        system: 'Windows 7'
      },
      {
        id: 'e12ea5d71f',
        name: '对象不支持此属性或方法',
        date: '2016-03-22 16:26:09',
        url: 'http://bj.58.com/zptaobao/?PGTID=0d100000-0000-1128-816e-1e8d49ca2ea8&ClickID=1',
        browserFlag: 7,
        browser: 'Microsoft Internet Explorer 10.0',
        system: 'Windows 10'
      }
    ];
    return (
      <div id="error-detail-list" className="container-fluid">
        {results.map(function (result) {
          let header = (
            <div>
              <div className="media">
                <div className="media-left">
                  <img className="media-object" src={`/images/browser_nice_icon_0${result.browserFlag}.png`} alt="#" width="64" height="64" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{result.name}<small className="pull-right">34分钟前</small></h4>
                  <p>
                    <a href={result.url} target="_blank">{result.url}</a>
                    <br />
                    <span className="text-muted">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36</span>
                  </p>
                </div>
              </div>
            </div>
          );
          return (
            <Panel header={header}>
              <InfoComponent info={result} />
            </Panel>
          );
        })}
      </div>
    );
  }
}

ListComponent.displayName = 'ErrorDetailListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
