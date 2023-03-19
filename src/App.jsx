
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
    // c8ba0bdd - 994b - 44a9 - aef8 - 3dbd5e009de0
    return (
        <ChatEngine
            height='100vh'
            projectID='50549831-8848-4c06-9421-0700fe8d7e83'
            userName='firalammydewano@gmail.com'
            userSecret='Firalammy@8'
            // userName='rabiya'
            // userSecret='Rabitu@8'

            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;