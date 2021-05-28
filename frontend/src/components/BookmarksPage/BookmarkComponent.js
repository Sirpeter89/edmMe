import { useState, useEffect} from "react";
import EventCardComponent from '../EventCard/EventCardComponent'
import '../MyEventsPage/MyEventsComponent.css'

export default function BookmarkComponent(){
    const [eventsList, setEventslist] = useState([]);

    useEffect(async ()=>{
        let newEventsList = [];
        const res = await fetch(`/api/bookmarks`);
        const bookmarks = await res.json();

        for (const bookmark of bookmarks){
            const eventId = bookmark.eventId;
            const res = await fetch(`/api/event/${eventId}`);
            const singleEvent = await res.json();
            newEventsList.push(singleEvent.event)
        }
        setEventslist(newEventsList)
    }, [])

    return (
        <div className='eventCardsContainer'>
            {eventsList.map((event)=>
                <EventCardComponent key={event.id} event={event}></EventCardComponent>
            )}
        </div>
    )
}
