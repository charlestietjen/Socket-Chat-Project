import './ChatInput.css';
import { useState } from 'react';
import { socket } from '../../controllers/socket';

export default function ChatInput() {
    const [formState, setFormState] = useState({ body: ''});
    const { body } = formState;

    function handleChange(e){
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    function submitHandler(e){
        e.preventDefault();
        const { name, body } = e.target;
        console.log(body.value)
        socket.emit('chatMessage', body.value)
    }
    return (
        <div className='ChatInput'>
            <form className='input-form' onSubmit={submitHandler} id='input-body'>
                <textarea className='input-box' name='body' defaultValue={body} onChange={handleChange} />
                <button type='submit' className='send-button'>Send!</button>
            </form>
        </div>
    )
}