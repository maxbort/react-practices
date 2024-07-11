// import React from 'react';

// function Contents(props) {
//     // return (
//     //     <p>Pure React(React API) 컴포넌트</p>
//     // );
//     return React.createElement('p',null,'Pure React(React API) 컴포넌트');

// }

// export default Contents;

import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return (
            <p>클래스 컴포넌트</p>
        );
    }
}

export default Contents;