import { useState } from 'react';
import ChatBody from '../ChatBody';
import ChatInput from '../ChatInput';
import './EnterName.css';

export default function EnterName(){
    const room = 'goblinhours';
    const [user, setUser] = useState('');
    const [isJoined, setIsJoined] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setUser(e.target.user.value);
        setIsJoined(true);
    }

    return(
        <div className='EnterName'>
            {!isJoined &&(
                <div className='name-entry-container'>
                    <form name='' onSubmit={handleSubmit}>
                        <input name='user' defaultValue='' placeholder='Enter username...' className='name-input' />
                        <button type='submit' className='name-submit-button'>Enter the Chat</button>
                    </form>
                </div>
            )}
        {isJoined &&(
        <>
            <div className='chat-container'>
                <ChatBody room={room} user={user} />
                <ChatInput room={room} user={user} />
            </div>
        </>
            )}
        </div>
    )
}