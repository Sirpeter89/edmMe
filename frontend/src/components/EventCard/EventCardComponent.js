import eventReducer from '../../store/event'
import './EventCardComponent.css'
import { useHistory } from "react-router-dom";


export default function EventCardComponent({event}){
    const history = useHistory();

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

    const handleClick = () =>{
        history.push(`/event/${event.id}`);
    }

    return(
        <div className='cardContainer'onClick={handleClick}>
            <div className='imgContainer'>
                <img className='image' src={event.eventImg} />
            </div>
            <div className='eventInfo'>
                <p>{event.name}</p>
                <p>{`${day}, ${month} ${date}, ${year} at ${hour}:${minute}${pmAm}`}</p>
            </div>
        </div>
    )
}
