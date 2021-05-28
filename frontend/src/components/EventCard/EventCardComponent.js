import eventReducer from '../../store/event'
import './EventCardComponent.css'
import { useHistory } from "react-router-dom";
import { csrfFetch } from '../../store/csrf';
import { useSelector } from "react-redux";


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

    const sessionUser = useSelector((state) => state.session.user);

    const addBookmark = async (eventId) =>{
        const res = await csrfFetch(`/api/bookmarks`,{
            method: "POST",
            body: JSON.stringify({
                eventId: eventId,
                userId: sessionUser.id,
            }),
        });
    }

    const getBookmark = async (eventId) =>{
        const res = await fetch(`/api/bookmarks/${eventId}`);
        const existingBookmark = await res.json();
        return existingBookmark;
    }

    const bookmark = async () =>{
        const record = await getBookmark(event.id)
        if (!record){
        await addBookmark(event.id);
            alert("Event Bookmarked!");
        } else {
            alert("Bookmark already exists");
        }
    }

    let bookmarkBut;
    if(sessionUser && window.location.href !== 'http://localhost:3000/bookmarks'){
        bookmarkBut = (
            <button className='bookmarkButton' onClick={bookmark}>	&#9733;</button>
        )
    }

    return(
        <div className='cardContainer'>
            {bookmarkBut}
            <div className='innerCard' onClick={handleClick}>
                <div className='imgContainer'>
                    <img className='image' src={event.eventImg} />
                </div>
                <div className='eventInfo'>
                    <p>{event.name}</p>
                    <p>{`${day}, ${month} ${date}, ${year} at ${hour}:${minute}${pmAm}`}</p>
                </div>
            </div>
        </div>
    )
}
