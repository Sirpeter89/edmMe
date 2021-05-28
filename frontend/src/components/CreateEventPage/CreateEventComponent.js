import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event';
import './CreateEventComponent.css'
import { useHistory, useParams } from "react-router-dom";
import { csrfFetch } from '../../store/csrf';

export default function CreateEventComponent(){
    const [name, setEventName] = useState('');
    const [eventImg, setImgUrl] = useState('');
    const [date, setDateTime] = useState('');
    const [description, setDescription] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;

    const dispatch = useDispatch();

    let history = useHistory();

    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/myEvents');
        return dispatch(eventActions.createEvent({ name, eventImg, date, description, userId }))
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        const res = await csrfFetch(`/api/event/edit/${id}`,{
            method: "PUT",
            body: JSON.stringify({
                name,
                eventImg,
                date,
                description,
                userId,
            }),
        });
        history.push('/myEvents');
        return res.json();
    }

    let correctForm;

    if(window.location.href === `https://edmme.herokuapp.com/editEvent/${id}`){
            correctForm = (
                <form onSubmit={handleEdit}>
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
                    <button type="submit">Submit Changes</button>
                </form>
            )
    } else {
        correctForm = (
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
        )
    }

    return(
        <div className='background'>
            <div className='eventFormContainer'>
                {correctForm}
            </div>
        </div>


    )
}
