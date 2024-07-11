import React from 'react';

function App() {
    // return (
    //         <h1>Ex02</h1>
    //         <p>특징2: Sigle Root</p>
    // ); 에러 코드
    // 이유 
    // 
    // React.createElement('h1', null, 'Ex02');
    // React.createElement('p', null, '특징2: Single Root');
    

    // 해결: 
    // <div>
    // <h1>Ex02</h1>
    // <p>특징2: Sigle Root</p>
    // </div>
    // );
    
    // transpile
    // return(
    //     React.createElement(
    //         'div',
    //         null,
    //         React.createElement('h1', null, 'Ex02'),
    //     React.createElement('p', null, '특징2: Single Root')
    //     )
    // );

}

export {App};