import { csrfFetch } from './csrf';

const SET_EVENT = 'session/setEvent';
const DELETE_EVENT = 'session/deleteEvent';

const setEvent = (event) => {
    return {
        type: SET_EVENT,
        payload: event,
        };
    };

const deleteEvent = (event) => {
    return {
        type: DELETE_EVENT,
        payload: event,
    }
}

export const createEvent = (event)=> async() =>{
    const { name, eventImg, date, description, userId } = event;
    const response = await csrfFetch("/api/event", {
    method: "POST",
    body: JSON.stringify({
        name,
        eventImg,
        date,
        description,
        userId,
        }),
    });
    return response;
};

export const getEvents = () => async (dispatch) => {
    const res = await fetch('/api/event');
    const eventList = await res.json();
    await dispatch(setEvent(eventList.events));
    return res;
}

export const getAllEvents = () => async (dispatch) => {
    const res = await fetch('/api/event/all');
    const eventsList = await res.json();
    await dispatch(setEvent(eventsList.events));
    return res;
}

export const deletedEvent = (eventId) => async (dispatch) => {

    const res = await csrfFetch(`/api/event/${eventId}`,{
        method: "DELETE",
    });
    const deletedEvent = await res.json();
    await dispatch(deleteEvent(deletedEvent))
    return res;
}

const initialState = {};

const eventReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case SET_EVENT:
            newState = Object.assign({}, state);
            action.payload.forEach((event)=>{
                newState[event.id] = event
            })
            return newState;
        case DELETE_EVENT:
            newState = Object.assign({}, state);
            delete newState[action.payload.id];
            return newState;
        default:
            return state;
    }
}

export default eventReducer;
