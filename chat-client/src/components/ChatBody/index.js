import './ChatBody.css';
import { useState } from 'react';

export default function ChatBody(){
    function randomKey(){
        return Math.floor(Math.random() * 65535);
    }
    const [messages] = useState([
        {user: 'gob', body: 'goblins rule', key: 1},
        {user: 'bobin', body: 'hard agree', key: 2},
        {user: 'gob', body: 'i have a podcast where i talk about this in more detail you know', key: 3},
        {user: 'bobin', body: 'not really a podcast kind of gobbo', key: 4},
        {user: 'big-marge', body: 'big-time same', key: 5}
    ])
    return (
        <div className='ChatBody'>
            <ul className='message-list'>
                {messages.map(message => (
                        <li className='message-container' key={message.key}>
                            <p className='message-author'>{message.user}</p>
                            <p className='message-body'>{message.body}</p>
                        </li>
                ))}
            </ul>
        </div>
    )
}