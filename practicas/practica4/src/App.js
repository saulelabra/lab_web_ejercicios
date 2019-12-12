//Saúl Enrique Labra Cruz A01020725
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails'
import AddContact from './AddContact';
import { connect } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={ContactList} />
          <Route exact path='/contactDetails' component={ContactDetails} />
          <Route exact path='/addContact' component={AddContact} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default (App);
