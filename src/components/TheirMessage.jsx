import React from 'react';

const TheirMessage = ({ message }) => {
    return (
        <div className='their-message'>{message.text}</div>
    );
};

export default TheirMessage;