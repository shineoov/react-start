import React, {useState} from "react";

const Say = () => {

    const [message, setMessage] = useState('');
    const onClickEvent = () => setMessage('안녕하세요~!');
    const onClickLeave = () => setMessage('안녕히 가세요~!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEvent}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>RED</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>BLUE</button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>GREEN</button>
        </div>
    )
};

export default Say;