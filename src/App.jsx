
import MyChatEngine from './MyChatEngine';

import Login from './components/login/Login';
import MessageForm from './components/messages/MessageForm';

import './app.css';
import { useEffect, useState } from 'react';

const App = () => {
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
    const fayaChatAppCredentials = JSON.parse(localStorage.getItem('fayaChatAppCredentials')) || {};
    const { username, pwd } = fayaChatAppCredentials;
    return (
        <div className='App'>
            {
                !(username && pwd) ?
                    <Login />
                    :
                    // <MessageForm />
                    <MyChatEngine />
            }
        </div>
    );
};

export default App;