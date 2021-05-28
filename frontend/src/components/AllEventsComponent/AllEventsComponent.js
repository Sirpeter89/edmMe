import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {getAllEvents} from '../../store/event'
import EventCardComponent from '../EventCard/EventCardComponent'
import '../MyEventsPage/MyEventsComponent.css'

export default function AllEventsComponent(){

    const dispatch = useDispatch();
    const events = useSelector((state)=>Object.values(state.event))

    useEffect(()=>{
        dispatch(getAllEvents());
    },[dispatch])

    return(
        <div className='eventCardsContainer'>
            {events.map((event)=>
            <EventCardComponent key={event.id} event={event}></EventCardComponent>
            )}
        </div>
    )
}
