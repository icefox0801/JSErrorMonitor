# JSErrorMonitor
页面javascript错误监控系统：[http://status.flybyte.cn](http://status.flybyte.cn)。登录用户名`admin`，密码`admin`。

## 使用
在页面中引用[JSErrorCollector](https://github.com/icefox0801/JSErrorCollector)，并将错误上报的API地址修改为[JSErrorMonitor-server](https://github.com/icefox0801/JSErrorMonitor-server)的后台服务的地址，这样在页面报错时会将错误信息上传给错误监控系统JSErrorMonitor。  
**本地开发调试需要后台API支持，请部署[JSErrorMonitor-server](https://github.com/icefox0801/JSErrorMonitor-server)或者自己实现，API代理转发配置在[cfg/base.js](https://github.com/icefox0801/JSErrorMonitor/blob/master/cfg/base.js)中**

## 用户界面：
+ 首页：
![首页](https://cloud.githubusercontent.com/assets/3138397/14552342/053260fe-0310-11e6-9527-17e2219ff56d.png)
+ 列表页：
![列表页](https://cloud.githubusercontent.com/assets/3138397/14552358/2f640698-0310-11e6-94d4-9eb20fd8bb47.png)
+ 详情页：
![详情页](https://cloud.githubusercontent.com/assets/3138397/14552374/52c30508-0310-11e6-9dc2-59dccd386b30.png)
+ 图表页：
![图表页](https://cloud.githubusercontent.com/assets/3138397/14552391/728491ea-0310-11e6-8a8c-2d3257fbf54b.png)

## 安装
1. 通过`npm install`安装所有依赖 
2. 项目本地开发调试依赖于`webpack`和`yeoman`所以需要先全局安装二者
3. 项目是基于`generator-react-webpack`生成的，更多用法请参考[generator-react-webpack](https://github.com/newtriks/generator-react-webpack)

## 命令
+ `npm start`：在本地[http://localhost:8000/webpack-dev-server/](http://localhost:8000/webpack-dev-server/)启动项目

## 应用的框架和库
+ 项目底层是基于[react](https://facebook.github.io/react/)、[redux](https://github.com/reactjs/redux)和[react-redux](https://github.com/reactjs/react-redux)搭建
  + react-redux：通过`connect`和`<Provider>`将`react`和`redux`两者进行集成 
  + react的文档：[中文](http://reactjs.cn/react/docs/getting-started.html)、[English](http://reactjs.cn/react/docs/getting-started.html)
  + flux应用架构：[中文](https://facebook.github.io/flux/docs/overview.html)、[English](http://reactjs.cn/react/docs/flux-overview.html)
  + redux的文档：[中文](http://cn.redux.js.org/)、[English](http://redux.js.org/)
  + redux的教程：[redux核心概念](http://www.jianshu.com/p/3334467e4b32)、[React+Redux系列教程](https://github.com/lewis617/react-redux-tutorial)、[深入理解React、Redux](http://www.jianshu.com/p/0e42799be566)
+ 项目UI应用了[react-boostrap](https://github.com/react-bootstrap/react-bootstrap)
  + react-bootstrap文档：[English](http://react-bootstrap.github.io/)
+ 路由应用了[react-router](https://github.com/reactjs/react-router)、[react-router-redux](https://github.com/reactjs/react-router-redux)和[react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
  + react-router-bootstrap：通过`<LinkContainer>`将`react-router`与`react-bootstrap`两者进行集成
  + react-router-redux：通过`routeReducer`和`routeMiddleWare`将`react-router`与`react-redux`两者进行集成
  + react-router文档：[中文](http://react-guide.github.io/react-router-cn/)、[English](https://github.com/reactjs/react-router/tree/master/docs)
+ 图表应用了[Highcharts](http://www.highcharts.com/)
  + Highcharts文档：[中文](http://www.hcharts.cn/api/index.php)、[English](http://api.highcharts.com/highcharts)
+ 数组、对象操作应用了[lodash](https://github.com/lodash/lodash)
  + lodash的文档：[中文(**比较旧，不推荐**)](http://lodashjs.com/docs/)、[English](https://lodash.com/docs)
+ 日期对象操作应用了[momentjs](https://github.com/moment/moment)
  + momentjs的文档：[中文](http://momentjs.cn/docs/)、[English](http://momentjs.com/docs/)
+ 其他库：
  + [nprogress](https://github.com/rstacruz/nprogress)：页面顶部加载进度条
  + [react-highcharts](https://github.com/kirjs/react-highcharts)：将`react`和`Highcharts`两者进行集成
  
## src目录结构
`actions`：redux的actions目录  
`components`：react的组件目录  
`config`：开发配置目录  
`constants`：常量目录  
`favicon.ico`  
`images`：图片目录  
`index.html`：页面  
`index.js`：页面的入口js  
`reducers`：redux的reducers目录  
`stores`：redux的store目录  
`styles`：redux的样式目录  
`utils`：js工具方法目录  

## ES6与JSX harmony语法
项目默认开启ES6与JSX harmony语法支持
+ ES6教程：[深入浅出ES6](http://www.infoq.com/cn/minibooks/ES6-in-Depth?utm_campaign=rightbar_v2&utm_source=infoq&utm_medium=minibooks_link&utm_content=link_text)
+ 模块化：支持import语法，项目的`node_modules`目录会作为模块根目录

## 新建react组件
运行`yo react-webapck:component path/to/name`，会生成
  + `src/components/path/to/NameComponent.js`
  + `src/styles/path/to/name.scss`
  + `test/components/NameComponentTest.js`

## redux开发：
  1. 在`src/constants/actionType.js`新增action type
  2. 在`src/actions`目录下新增action，并通过`src/actions/index.js`暴露出来
  3. 在`src/reducers`目录下新增reducer，并通过`src/reducers/index.js`暴露出来
  4. 在`src/stores/configureStore.js`配置新增的reducer和store的state映射关系
  5. 在react组件中通过`connect`和`mapStateToProps`方法映射store的state到组件的props
  6. 在组件生命周期方法（比如`componentDidUpdate`、`componentWillUpmount`、`componentDidUpdate`等）中通过`dispatch`派发action
  7. 通过action引起的对象属性更新，会经过reducer映射到store的state中，再经过`connect`和`mapStateToProps`引发组件的props更新，从而更新视图
