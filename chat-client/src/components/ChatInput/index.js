import './ChatInput.css';
import io from 'socket.io-client';

export default function ChatInput() {
    return (
        <div className='ChatInput'>
            <textarea className='input-box'></textarea>
        </div>
    )
}