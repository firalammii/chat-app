import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import './styles.css';


const ChatFeed = (props) => {
    // console.log(props)
    const { chats, activeChat, messages, userName } = props;
    // console.log(chats);
    const chat = chats && chats[activeChat];
    // console.log(chat.people);

    // console.log(messages);
    const messageKeys = Object.keys(messages);
    // console.log(messageKeys);

    const renderMessages = () => {
        return messageKeys.map((key, index) => {
            const message = messages[key];
            // console.log(message);
            const isMyMassage = messages[key].sender_username === userName;
            // console.log(isMyMassage);
            // console.log(messages[key].text); style={{ width: '100%' }}
            return (
                <div key={`msg${index}`}>
                    {isMyMassage ?
                        <MyMessage message={message} />
                        : <TheirMessage message={message} />
                    }
                </div>
            );
        });

    };

    return (
        <div className='chat-feed'>
            <div className='title-con'>
                <div className='chat-title'>
                    <h2>{chat && chat.title.toUpperCase()}</h2>
                </div>
                <div className='chat-subtitle'>
                    {chat && chat.people && chat.people.map(person => {
                        if (!person.person.avatar) {
                            const fn = person.person.first_name;
                            const ln = person.person.last_name;
                            const shortName = fn[0].toUpperCase() + ln[0].toUpperCase();
                            return <div key={person.person.id} className='circular-short-name'> {shortName}</div>;
                        }
                        return (
                            <span key={person.person.id}>
                                <img src={person.person.avatar} alt='' width={40} style={{ borderRadius: '50%' }} />
                            </span>
                        );
                    })}
                </div>
            </div>
            {renderMessages()}
            <MessageForm />
        </div>
    );
};

export default ChatFeed;