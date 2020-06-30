import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//웹 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링함을 의미
//React-Dom : 실시간으로 화면에 출력하기 위해 필요한 모듈
//render() : 화면에 출력하기 위해 필요한 컴포넌트 함수

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();