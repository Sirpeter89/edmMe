import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './EventPageComponent.css'

export default function EventPageComponent(){
    const [event, setEvent] = useState('');
    const {id} = useParams();

    useEffect( ()=>{
        getSingleEvent(id);
    },[])

    const getSingleEvent = async (eventId) =>{
        const res = await fetch(`/api/event/${eventId}`);
        const loadedEvent = await res.json();
        setEvent(loadedEvent.event);
    }

    const dayOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const dateTime = new Date(event.date);
    let pmAm = 'PM';
    if(dateTime.getHours() < 12){
        pmAm = 'AM';
    }
    const hour = dateTime.getHours() % 12 || 12;
    let minute = dateTime.getMinutes();
    if(minute < 10){
        minute = `0${minute}`;
    }
    const day = dayOfWeek[dateTime.getDay()];
    const date = dateTime.getDate();
    const month = monthNames[dateTime.getMonth()];
    const year = dateTime.getFullYear();

    return (
        <>
            <div className='backgroundImage'>
                <img className='imageBlur' src={event.eventImg} />
            </div>
            <div className='eventDetails'>
                <img className='mainImage' src={event.eventImg} />
                <p className='eventName'>{event.name},  ( {month} {date} )</p>
                <div className='detailsBox'>
                        {event.description}
                </div>
                <p className='addTickets'>Add Tickets To This Event:</p>
                <button className='toAddTickets'>&#x2192;</button>
            </div>
        </>
    );
}
