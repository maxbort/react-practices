import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root')); // React 18부터 도입된 새로운 렌더링 진입점.
                                                                  // 렌더링 시작할 DOM 요소 지정
root.render( // React 엘리멘트를 지정된 루트 DOM 요소에 렌더링하는 역할
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React 어플리케이션 시작하는데 사용되는 진입점의 역할.
// ReactDom.createRoot()