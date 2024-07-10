function App(){
    const App = document.createElement('div');
    App.textContent = "Hello World";

    return App;
}

// dom api로 작성
document
    .getElementById('root')
    .appendChild(App());
