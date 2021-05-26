import React, { useState } from 'react';
import { useParams } from 'react-router';
import { csrfFetch } from '../../store/csrf';

export default function AddTicketsComponent(){
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [ticketImg, setImage] = useState('');
    const {id} = useParams();

    const postEvent = async (event) =>{
        const {price, type, ticketImg} = event;
        const sold = false;
        const eventId = id;
        const res = await csrfFetch(`/api/addTickets/${eventId}`,{
            method: "POST",
            body: JSON.stringify({
                price,
                type,
                ticketImg,
                sold,
                eventId,
            }),
        });
        const loadedEvent = await res.json();
        return res;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        postEvent({price, type, ticketImg})
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Price:
                </label>
            </div>
            <div>
                <input
                    type='number'
                    value={price}
                    onChange={
                        (e)=>setPrice(e.target.value)
                    }
                    min='0.01'
                    step='0.01'
                    required
                />
            </div>
            <div>
                <label>
                    Type of admission:
                </label>
            </div>
            <div>
                <input
                    type='text'
                    value={type}
                    onChange={
                        (e)=>setType(e.target.value)
                    }
                    placeholder='GA'
                    required
                />
            </div>
            <div>
                <label>
                    Ticket Image:
                </label>
            </div>
            <div>
                <input
                    type='text'
                    value={ticketImg}
                    onChange={(e)=>setImage(e.target.value)}
                    placeholder='upload ticket here'
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
