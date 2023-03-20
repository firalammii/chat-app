import React from 'react';
import MessageForm from './messages/MessageForm';
import MyMessage from './messages/MyMessage';
import TheirMessage from './messages/TheirMessage';
import './styles.css';

const ChatFeed = (props) => {
    // console.log(props);
    const { chats, activeChat, messages, userName, creds } = props;
    // console.log(chats);
    const chat = chats && chats[activeChat];
    // console.log(chat)

    // console.log(chat && chat.people)

    return (
        <div className='chat-feed'>
            <ChatTitle chat={chat} />
            <RenderMessages messages={messages} userName={userName} />
            <div className='message-form-margin'></div>
            <MessageForm creds={creds} chatId={activeChat} />
        </div>
    );
};


const RenderMessages = ({ messages, userName }) => {

    console.log(messages);
    const messageKeys = Object.keys(messages);
    // console.log(messageKeys);

    return messageKeys.map((key, index) => {
        const message = messages[key];
        // console.log(message);
        // console.log(userName);
        const isMyMassage = messages[key].sender.username === userName;
        // console.log(isMyMassage);
        // console.log(messages[key].text); 
        return (
            <div key={`msg${index}`}>
                {
                    isMyMassage ?
                        <MyMessage message={message} />
                        : <TheirMessage message={message} />
                }
            </div>
        );
    });

};

const ChatTitle = ({ chat }) => {

    const noAvatar = (fn, ln) => {
        const shortName = fn[0].toUpperCase() + ln[0].toUpperCase();
        return <div className='circular-short-name'> {shortName}</div>;
    };
    return (
        <div className='title-con'>
            <div className='chat-title'>
                <h2>{chat && chat.title.toUpperCase()}</h2>
            </div>
            <div className='chat-subtitle'>
                {chat && chat.people && chat.people.map((person, i) => {
                    return (
                        < div key={`person${i}`} >
                            {!person.person.avatar ?
                                noAvatar(person.person.first_name, person.person.last_name)
                                :
                                <img src={person.person.avatar} alt='' width={30} style={{ borderRadius: '50%' }} />
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ChatFeed;