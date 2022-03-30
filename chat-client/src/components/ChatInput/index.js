import './ChatInput.css';
import { useState } from 'react';
import { socket } from '../../controllers/socket';

export default function ChatInput(props) {
    const [formState, setFormState] = useState({ body: ''});
    const [message, setMessage] = useState({body: ''});
    const { body } = message;
    const { user } = props;

    function handleChange(e){
        setMessage({...message, [e.target.name]: e.target.value});
    }

    function submitHandler(e){
        e.preventDefault();
        const { body } = e.target;
        const message = { user: user, body: body.value};
        console.log(message)
        socket.emit(props.room, message)
        setMessage({body:''})
    }
    return (
        <div className='ChatInput'>
            <form className='input-form' onSubmit={submitHandler} id='input-body'>
                <textarea className='input-box' name='body' defaultValue={body} value={body} onChange={handleChange} />
                <button type='submit' className='send-button'>Send!</button>
            </form>
        </div>
    )
}