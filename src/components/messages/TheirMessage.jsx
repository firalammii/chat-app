import React from 'react';

const TheirMessage = ({ message }) => {

    if (message.attachments && message.attachments.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'left' }}
            />
        );
    }

    const regexp = /[^<p>|</p>]/ig
    return (
        <div className='their-message'>{message.text.match(regexp)}</div>
    );
};

export default TheirMessage;