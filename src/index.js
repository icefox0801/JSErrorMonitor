import 'core-js/fn/object/assign';
import ReactDOM from 'react-dom';
import AppRouter from './components/Router';
import Highcharts from 'highcharts';
import 'bootstrap/dist/css/bootstrap.css';
import 'nprogress/nprogress.css';

Highcharts.setOptions({
  global: {
    useUTC: false,
    timezoneOffset: 8
  }
});
// Render the main component into the dom
ReactDOM.render(AppRouter, document.getElementById('app'));
