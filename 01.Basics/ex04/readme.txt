ex04: Application Bundling
브라우저가 모듈링을 지원해도 번들링이 필요한 이유
-> 


그럼 웹 개발을 할 때 '번들링'을 한다고 하면 무슨 의미일까?
(참고로 웹 개발에서 번들링 = 빌드 라고 할 수 있다.)
사용자에게 웹 애플리케이션을 제공하기 위해 여러 코드와 프로그램들을 묶는 행위로 정의할 수 있다.
개발자는 최종적으로 번들링된 웹 애플리케이션을 만들어내고, 사용자가 웹 애플리케이션을 이용할 때는 번들링한 파일을 받아와 브라우저가 이 번들을 실행한다.

1 파일의 크기 문제 해결
2 애플리케이션 임의 조작 방지
3 파일 단위의 js 모듈 관리의 필요성

[참고] webpack-practices ex01 ~ ex06



== [실습] ===============================================

<1>Init Project
$ mkdir ex04
$ cd ex04
$ npm init -y 


<2> Install Packages
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass


<3> NPM scripting : package.json
"scripts": {
    "start": "npx webpack serve  --progress",
    "build": "npx webpack"
} 


<4> Configuration
webpack.config.js


<5> Landing Page
public/index.html 


<6> Writing Application
1. src/index.js
2. src/App.js


<7> Test
$ npm start


<8> Build(Bundling)
$ npm run build