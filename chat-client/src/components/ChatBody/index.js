import './ChatBody.css';
import { useState, useEffect } from 'react';
import { socket } from '../../controllers/socket';

export default function ChatBody(props){
    
    function randomKey(){
        return Math.floor(Math.random() * 65535);
    }
    const [messages, setMessages] = useState([])
    useEffect(() => {
    socket.on(props.room, msg => {
        console.log(msg);
        const newMessage = {user:msg.user, body: msg.body, key: randomKey()};
        setMessages((prevMessages) => [
            ...prevMessages,
            newMessage
        ]);
    })}, [])
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
