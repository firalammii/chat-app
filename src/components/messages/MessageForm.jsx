import React, { useEffect, useRef, useState } from 'react';
import { sendMessage } from 'react-chat-engine';
import './messageForm.css';
const MessageForm = ({ creds, chatId }) => {
    const [text, setText] = useState('');

    const textareaRef = useRef(null);
    useEffect(() => {
        textareaRef.current.focus();
    });
    function handleSendMessage (e) {
        e.preventDefault();

        const msg = text.trim();
        if (msg.length > 0)
            sendMessage(creds, chatId, { text });
        setText('');
    }

    return (
        <div className='message-form' style={{ marginTop: 'auto' }} >
            <form onSubmit={handleSendMessage}>
                <div className='input-con'>
                    <textarea
                        className='input'
                        placeholder="send message"
                        ref={textareaRef}
                        rows={2}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <div>
                        <input className='button' type='submit' value='send' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;