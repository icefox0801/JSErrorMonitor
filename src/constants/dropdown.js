'use strict';

exports.pageSize = {
  title: '页码数量',
  placeholder: '请选择页码数量',
  list: [
    {
      key: '20',
      value: '20个'
    },
    {
      key: '50',
      value: '50个'
    },
    {
      key: '100',
      value: '100个'
    }
  ]
};

exports.browser = {
  title: '浏览器',
  placeholder: '请选择浏览器',
  list: [
    {
      key: 'all',
      value: '全部'
    },
    {
      key: 'IE',
      value: 'Internet Explorer'
    },
    {
      key: 'Chrome',
      value: 'Google Chrome'
    },
    {
      key: 'Chrome Mobile',
      value: 'Chrome Mobile'
    },
    {
      key: 'Firefox',
      value: 'Mozilla Firefox'
    },
    {
      key: 'Opera',
      value: 'Opera'
    },
    {
      key: 'Safari',
      value: 'Safari'
    },
    {
      key: 'Mobile Safari',
      value: 'Mobile Safari'
    },
    {
      key: 'else',
      value: '其他'
    }
  ]
};

exports.os = {
  title: '操作系统',
  placeholder: '请选择操作系统',
  list: [
    {
      key: 'all',
      value: '全部'
    },
    {
      key: 'windows',
      value: 'Windows'
    },
    {
      key: 'Mac OS X',
      value: 'Mac OS X'
    },
    {
      key: 'iOS',
      value: 'iOS'
    },
    {
      key: 'android',
      value: 'Android'
    },
    {
      key: 'else',
      value: '其他'
    }
  ]
};

exports.timeRange = {
  title: '时间范围',
  placeholder: '请选择时间范围',
  list: [
    {
      key: 1,
      value: '1小时'
    },
    {
      key: 24,
      value: '24小时'
    },
    {
      key: 24 * 7,
      value: '7天'
    },
    {
      key: 24 * 30,
      value: '1个月'
    },
    {
      key: 24 * 360,
      value: '1年'
    }
  ]
};

exports.business = {
  title: '业务线',
  placeholder: '请选择业务线',
  list: [
    {
      key: 'all',
      value: '全部'
    },
    {
      key: 'house',
      value: '房产'
    },
    {
      key: 'job',
      value: '招聘'
    },
    {
      key: 'ershou',
      value: '二手'
    },
    {
      key: 'post',
      value: '发布'
    },
    {
      key: 'info',
      value: '黄页'
    },
    {
      key: 'extra',
      value: '其他'
    }
  ]
};

exports.status = {
  title: '错误状态',
  placeholder: '请选择错误状态',
  list: [
    {
      key: 'open',
      value: '未解决'
    },
    {
      key: 'closed',
      value: '已解决'
    },
    {
      key: 'all',
      value: '全部'
    }
  ]
};
