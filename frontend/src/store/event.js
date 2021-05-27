import { csrfFetch } from './csrf';

const SET_EVENT = 'session/setEvent';

const setEvent = (event) => {
    return {
        type: SET_EVENT,
        payload: event,
        };
    };

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
    const data = await response.json();
    return response;
};

export const getEvents = () => async (dispatch) => {
    const res = await fetch('/api/event');
    const eventList = await res.json();
    dispatch(setEvent(eventList.events));
    return res;
}

export const getAllEvents = () => async (dispatch) => {
    const res = await fetch('/api/event/all');
    const eventsList = await res.json();
    console.log("EVENTS LSIT IS ", eventsList)
    dispatch(setEvent(eventsList.events));
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
        default:
            return state;
    }
}

export default eventReducer;
