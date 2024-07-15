import React from 'react';
import GroceryList from './GroceryList';
import '../assets/css/App.css';

function App(props) {
    return (
        <div id={'App'}>
            <h1 className={'title'}>{'Grocery List'}</h1>
            <GroceryList />
        </div>
    );
}

export default App;

// App 컴포넌트는 div로 감싸진 제목과 GroceryList 컴포넌트 렌더링
// GroceryList는 <ol>(순서 있는 목록)으로 렌더링
// CSS 파일 가져와서 적용