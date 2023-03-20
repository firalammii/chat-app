import React, { useState } from 'react';
import './messageForm.css';
const MessageForm = () => {
    const [text, setText] = useState('');



    return (
        <div className='message-form' >
            <form>
                <div className='input-con'>
                    <input
                        className='input'
                        placeholder="send message"
                    />
                    <div>
                        <input className='button' type='submit' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;