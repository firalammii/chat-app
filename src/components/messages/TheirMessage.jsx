import React from 'react';

const TheirMessage = ({ message }) => {

    const regexp = /[^<p>|</p>]/ig
    return (
        <div className='their-message'>{message.text.match(regexp)}</div>
    );
};

export default TheirMessage;