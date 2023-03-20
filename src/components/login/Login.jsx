
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './login.css';
const Login = () => {

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    async function handleLoginSubmit (e) {
        e.preventDefault();

        //             userName='firalammydewano@gmail.com'
        //             userSecret='Firalammy@8'
        const projectID = '50549831-8848-4c06-9421-0700fe8d7e83';
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': pwd };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            const fayaChatAppCredentials = {
                username, pwd
            };

            localStorage.setItem('fayaChatAppCredentials', JSON.stringify(fayaChatAppCredentials));


            window.location.reload();
            setError('');
        } catch (err) {
            setError('Oops, incorrect credentials.');
        }

    }

    return (
        <div className='login-wrapper'>

            <form className='form' onSubmit={handleLoginSubmit}>
                <div className='login-input-con'>
                    <h2>Login</h2>
                    <input
                        className='login-input'
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ref={inputRef}
                        required
                    />

                    <input
                        className='login-input'
                        placeholder='password'
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />

                    <button className='login-input'> Login </button>
                    <h2>{error}</h2>
                </div>

            </form>
        </div>
    );
};

export default Login;