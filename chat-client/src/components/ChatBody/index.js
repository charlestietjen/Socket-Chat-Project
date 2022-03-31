import './ChatBody.css';
import { useState, useEffect, useRef } from 'react';
import { socket } from '../../controllers/socket';

export default function ChatBody(props){
    
    function randomKey(){
        return Math.floor(Math.random() * 65535);
    }
    const [messages, setMessages] = useState([])
    const bottomRef = useRef(null);
    useEffect(() => {
    socket.on(props.room, msg => {
        console.log(msg);
        const newMessage = {user:msg.user, body: msg.body, key: randomKey()};
        setMessages((prevMessages) => [
            ...prevMessages,
            newMessage
        ]);
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    })}, [])
    return (
        <div className='ChatBody'>
            <ul className='message-list'>
                {messages.map(message => (
                        <li className='message-container' key={message.key}>
                            <div className='message-author'>{message.user}</div>
                            <div className='message-body'>{message.body}</div>
                        </li>
                ))}
                <div ref={bottomRef}></div>
            </ul>
        </div>
    )
}
