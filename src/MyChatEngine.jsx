import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";


const MyChatEngine = () => {
    return (
        <div className='chat-engine'>
            <ChatEngine
                height='100vh'
                projectID='50549831-8848-4c06-9421-0700fe8d7e83'
                userName='firalammydewano@gmail.com'
                userSecret='Firalammy@8'
                // userName='rabiya'
                // userSecret='Rabitu@8'

                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div >
    );
};

export default MyChatEngine;