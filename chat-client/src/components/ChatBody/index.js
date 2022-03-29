import './ChatBody.css';
import { useState } from 'react';

export default function ChatBody(){
    const [messages] = useState([
        {user: 'gob', body: 'goblins rule'},
        {user: 'bobin', body: 'hard agree'},
        {user: 'gob', body: 'i have a podcast where i talk about this in more detail you know'},
        {user: 'bobin', body: 'not really a podcast kind of gobbo'},
        {user: 'big-marge', body: 'big-time same'}
    ])
    return (
        <div className='ChatBody'>
            <ul className='message-list'>
                {messages.map(message => (
                    <>
                        <li className='message-container'>
                            <p className='message-author'>{message.user}</p>
                            <p className='message-body'>{message.body}</p>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    )
}