'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup, ListGroupItem, Row, Col, Pagination, Input, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

import DropdownComponent from '../../common/DropdownComponent';
import { pageNum, timeRange } from '../../../constants/dropdown';
import { jsError } from '../../../actions';

require('styles/error/list/Archive.scss');

class ArchiveComponent extends React.Component {
  componentDidMount () {
    const { dispatch, params } = this.props;
    dispatch(jsError.fetchArchiveErrorList(params));
  }
  render () {

    const header = (
      <Row>
        <Col md={5}>错误</Col>
        <Col md={4}>地址</Col>
        <Col md={1}>最早</Col>
        <Col md={1}>最近</Col>
        <Col md={1}>数量</Col>
      </Row>
    );

    const searchButton = (
      <Button bsStyle="primary"><Glyphicon glyph="search" />&nbsp;搜索</Button>
    );

    const { archives } = this.props.jsError;

    return (
      <div className="container-fluid" id="error-list-error">
        <form action="" className="form-inline">
          <Row>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">每页数量：</label>
                <DropdownComponent list={pageNum.list} placeholder={pageNum.placeholder} id="dropdown-page-number" />
              </div>
            </Col>
            <Col md={3}>
              <div className="form-group">
                <label htmlFor="">时间范围：</label>
                <DropdownComponent list={timeRange.list} placeholder={timeRange.placeholder} id="dropdown-time-range" />
              </div>
            </Col>
            <Col md={6}>
              <Input label="关键词：" type="text" buttonAfter={searchButton} />
            </Col>
          </Row>
        </form>

        <Panel header={header} id="error-list-archive">
          <ListGroup fill>
            {archives.list.map(function (archive, idx) {
              return (
                <ListGroupItem key={archive._id}>
                  <Row>
                    <Col md={5}>
                      <p><Link to={`/error/detail/${idx}`} className="text-danger"><strong>『{archive.status === 'open' ? '未解决' : '已解决'}』</strong>{archive.message}</Link></p>
                    </Col>
                    <Col md={4}>
                      <p><a href={archive.url || 'javascript:void(0)'} target="_blank">{archive.url || '无'}</a></p>
                    </Col>
                    <Col md={1}>
                      <p className="text-muted">{archive.earliest}</p>
                    </Col>
                    <Col md={1}>
                      <p className="text-muted">{archive.latest}</p>
                    </Col>
                    <Col md={1}>
                      <p><strong className="text-danger">{archive.count}</strong></p>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Panel>
        <Pagination className="pull-right" prev next first last ellipsis boundaryLinks items={20} maxButtons={5} activePage={1} />
      </div>
    );
  }
}

ArchiveComponent.displayName = 'ErrorListArchiveComponent';

// Uncomment properties you need
// ArchiveComponent.propTypes = {};
// ArchiveComponent.defaultProps = {};

function mapStateToProps(state) {
  const { jsError } = state;

  return {
    jsError
  }
}

export default connect(mapStateToProps)(ArchiveComponent);
