import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {getEvents} from '../../store/event'
import EventCardComponent from '../EventCard/EventCardComponent'
import './MyEventsComponent.css'

export default function MyEventsComponent(){

    const dispatch = useDispatch();
    const events = useSelector((state)=>Object.values(state.event))

    useEffect(async()=>{
        await dispatch(getEvents());
    },[dispatch])

    return(
        <div className='eventCardsContainer'>
            {events.map((event)=>
            <EventCardComponent key={event.id} event={event}></EventCardComponent>
            )}
        </div>
    )
}
