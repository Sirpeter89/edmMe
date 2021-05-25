import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {getEvents} from '../../store/event'

export default function MyEventsComponent(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getEvents());
    },[dispatch])

    return(
        <div>Hi</div>
    )
}
