import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event';

export default function CreateEventComponent(){
    const [name, setEventName] = useState('');
    const [eventImg, setImgUrl] = useState('');
    const [date, setDateTime] = useState('');
    const [description, setDescription] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(eventActions.createEvent({ name, eventImg, date, description, userId }))
    }

    return(
        <form onSubmit={handleSubmit}>
            <ul>

            </ul>
            <label>
                Event Name:
                <input
                type='text'
                value={name}
                onChange={(e) => setEventName(e.target.value)}
                required
                />
            </label>
            <label>
                Event Image(Link to an image):
                <input
                type='text'
                value={eventImg}
                onChange={(e) => setImgUrl(e.target.value)}
                required
                />
            </label>
            <label>
                Date of Event:
                <input
                type='datetime-local'
                value={date}
                onChange={(e) => setDateTime(e.target.value)}
                required
                />
            </label>
            <label>
                Describe the Event:
                <textarea
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                required
                />

            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
