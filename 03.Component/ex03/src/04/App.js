import React from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {

    const imgRef = userRef(null);


    const onKeyPressInput = (e) => {
        if(e.key === 'Enter'){
            console.log("keyPressed: " + e.target.value);
        }
    };

    const onChangeInput = (e) => {
        console.log("change: " + e.target.value);
    }
    
    const onFocusInput = () => {
        console.log('focus');
    }

    const onBlurInput = () => {
        console.log('blur');
    }

    const onMouseOverImg = (e) => {
        console.log('mouseover', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseMoveImg = (e) => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;


        console.log('mousemove', `x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`);
    }
    const onMouseOutImg = (e) => {
        console.log('mouseout', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseUpImg = (e) => {
        console.log('mouseUp', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseDownImg = (e) => {
        console.log('mousedown', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onClickImg = (e) => {
        console.log('click', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onDoubleClickImg = (e) => {
        console.log('double click', `x=${e.clientX}, y=${e.clientY}`);
    }
    return (
        <>
            <h2>Event Handler  예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요' 
                onKeyPress={onKeyPressInput}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                 />
                <br/>
                <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo} 
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                onMouseUp={onMouseUpImg}
                onMouseDown={onMouseDownImg}
                onClick={onClickImg}
                onDoubleClick={onDoubleClickImg}
                />
                
        </>
    );
}