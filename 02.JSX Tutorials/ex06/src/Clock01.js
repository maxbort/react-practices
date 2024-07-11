import React from 'react';

function Clock01(props) {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(hour < 10){
        hour = '0' + hour;
    }
    if(min < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }
    return (
        <div>
            {hour} : {minutes} : {seconds}
        </div>
    );
}

export default Clock01;