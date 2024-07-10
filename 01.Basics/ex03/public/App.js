function App() {
    const App = document.createElement('div');
    App.textContent = "Hello World";
    
    return App;
}

// named export, 구조분해가능
export {App};