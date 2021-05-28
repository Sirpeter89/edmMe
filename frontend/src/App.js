// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage/index';
import CreateEventComponent from './components/CreateEventPage/CreateEventComponent'
import AddTicketsComponent from './components/AddTicketsPage/AddTicketsComponent'
import MyEventsComponent from './components/MyEventsPage/MyEventsComponent'
import EventPageComponent from './components/EventPageComponent/EventPageComponent'
import AllEventsComponent from './components/AllEventsComponent/AllEventsComponent'
import PurchaseTicketsComponent from './components/PurchaseTicketsPage/PurchaseTicketsComponent'
import MyTicketsPage from './components/MyTicketsPage/MyTicketsPage'
import BookmarksPage from './components/BookmarksPage/BookmarkComponent'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/createEvent">
            <CreateEventComponent />
          </Route>
          <Route path='/myEvents'>
            <MyEventsComponent />
          </Route>
          <Route path='/event/:id'>
            <EventPageComponent />
          </Route>
          <Route path='/addTickets/:id'>
            <AddTicketsComponent />
          </Route>
          <Route path='/allEvents'>
            <AllEventsComponent />
          </Route>
          <Route path='/tickets/:id'>
            <PurchaseTicketsComponent />
          </Route>
          <Route path='/myTickets'>
            <MyTicketsPage />
          </Route>
          <Route path='/bookmarks'>
            <BookmarksPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
