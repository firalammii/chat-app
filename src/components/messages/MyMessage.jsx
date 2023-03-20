import React from 'react';

const MyMessage = ({ message }) => {
    const regexp = /[^<p>|</p>]/ig;
    const textcontent = message.text.match(regexp)
    return (
        <div className='my-message'>{textcontent}</div>
    );
};

export default MyMessage;