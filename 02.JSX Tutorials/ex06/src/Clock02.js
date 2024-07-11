import React from 'react';

function Clock02(props) {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return (
        <div>
            {('0'+ hour).slice(-2)}
            {':'} 
            {'0'+ minutes.slice(-2)}
            {':'} 
            {'0'+ seconds.slice(-2)}
        </div>
    );
}

export default Clock02;