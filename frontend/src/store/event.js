import { csrfFetch } from './csrf';

const SET_EVENT = 'session/setEvent';

const setEvent = (event) => {
    return {
        type: SET_EVENT,
        payload: event,
        };
    };

export const createEvent = (event)=> async(dispatch) =>{
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
    dispatch(setEvent(data.event));
    return response;
};

const initialState = {event: null};

const eventReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case SET_EVENT:
            newState = Object.assign({}, state);
            newState.event = action.payload;
            return newState;
        default:
            return state;
    }
}

export default eventReducer;
