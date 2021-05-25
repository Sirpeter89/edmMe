import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event';
import './CreateEventComponent.css'
import { useHistory } from "react-router-dom";

export default function CreateEventComponent(){
    const [name, setEventName] = useState('');
    const [eventImg, setImgUrl] = useState('');
    const [date, setDateTime] = useState('');
    const [description, setDescription] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;

    const dispatch = useDispatch();

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/myEvents');
        return dispatch(eventActions.createEvent({ name, eventImg, date, description, userId }))
    }

    return(
        <div className='background'>
            <div className='eventFormContainer'>
                <form onSubmit={handleSubmit}>
                    <ul>

                    </ul>

                    <div>
                        <div>
                            <label>
                                Event Name:
                            </label>
                        </div>
                        <div>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setEventName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>
                                Event Image(Link to an image):
                            </label>
                        </div>
                        <div>
                            <input
                                type='text'
                                value={eventImg}
                                onChange={(e) => setImgUrl(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>
                                Date of Event:
                            </label>
                        </div>
                        <div>
                            <input
                            type='datetime-local'
                            value={date}
                            onChange={(e) => setDateTime(e.target.value)}
                            required
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>
                                Describe the Event:
                            </label>
                        </div>
                        <div>
                            <textarea
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                required
                                />
                        </div>

                    </div>
                    <button type="submit">Add tickets</button>
                </form>
            </div>
        </div>


    )
}
