
import MyChatEngine from './MyChatEngine';

import { Context } from './ContextProvider';
import Login from './components/login/Login';
import MessageForm from './components/messages/MessageForm';

import './app.css';
import { useEffect, useState, useContext } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
    const { loggedUser } = useContext(Context)
    // c8ba0bdd - 994b - 44a9 - aef8 - 3dbd5e009de0
    // const [username, setUsername] = useState('');
    // const [pwd, setPwd] = useState('');
    // useEffect(() => {
    //     const fayaChatAppCredentials = JSON.parse(localStorage.getItem('fayaChatAppCredentials')) || null;
    //     if (fayaChatAppCredentials) {
    //         setUsername(fayaChatAppCredentials.username);
    //         setPwd(fayaChatAppCredentials.pwd);
    //     }
    // });
    console.log(loggedUser);
    const fayaChatAppCredentials = JSON.parse(localStorage.getItem(loggedUser)) || {};
    const { username, pwd } = fayaChatAppCredentials;

    return (
        <div className={!username ? 'App' : undefined}>
            {
                !(loggedUser) ?
                    <Login />
                    :
                    // <MessageForm />
                    // <MyChatEngine />
                    <ChatEngine
                        height='100vh'
                        projectID='50549831-8848-4c06-9421-0700fe8d7e83'
                        userName={username}
                        userSecret={pwd}
                        // userName='firalammydewano@gmail.com'
                        // userSecret='Firalammy@8'
                        // userName='rabiya'
                        // userSecret='Rabitu@8'

                        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                    />
            }
            {/* <div className='para'>
                <p>dgdfsg dgsg hf dfdsdsgdfgf dsfgsfh agsdfhsdhfghd fddfghdfgh sdvgrt  xv htdfvs vjsge gvhrs btret </p>
            </div> */}
        </div>
    );
};

export default App;